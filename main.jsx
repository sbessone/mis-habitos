import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  onSnapshot, 
  getDoc 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Calendar, 
  Award, 
  CheckSquare, 
  ListTodo, 
  Target, 
  History, 
  Archive,
  ChevronDown,
  ChevronUp,
  Users,
  User,
  RefreshCw
} from 'lucide-react';

// --- CONFIGURACIÓN COMPATIBLE (PREVIEW + PRODUCCIÓN) ---
const getFirebaseConfig = () => {
  try {
    // Intenta usar la configuración del entorno de previsualización
    if (typeof __firebase_config !== 'undefined') {
      return JSON.parse(__firebase_config);
    }
    // Fallback para Vercel/Netlify usando Vite
    return JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG || '{}');
  } catch (e) {
    return {};
  }
};

const getAppId = () => {
  if (typeof __app_id !== 'undefined') return __app_id;
  try {
    return import.meta.env.VITE_APP_ID || 'habitos-shared-v1';
  } catch (e) {
    return 'habitos-shared-v1';
  }
};

const firebaseConfig = getFirebaseConfig();
const appId = getAppId();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const App = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [habits, setHabits] = useState([]);
  const [goals, setGoals] = useState([]);
  const [history, setHistory] = useState([]);
  const [communityProgress, setCommunityProgress] = useState([]);
  
  const [activeTab, setActiveTab] = useState('habitos');
  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitTarget, setNewHabitTarget] = useState(7);
  const [newGoalText, setNewGoalText] = useState('');
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Soporte para token inicial del sistema o login anónimo
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Error de autenticación:", error);
      }
    };
    initAuth();

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        loadUserName(u.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadUserName = async (uid) => {
    const userDoc = await getDoc(doc(db, 'artifacts', appId, 'public', 'data', 'users', uid));
    if (userDoc.exists()) {
      setUserName(userDoc.data().displayName || `Usuario ${uid.substring(0, 4)}`);
    } else {
      setUserName(`Usuario ${uid.substring(0, 4)}`);
    }
  };

  useEffect(() => {
    if (!user) return;
    const habitsRef = doc(db, 'artifacts', appId, 'users', user.uid, 'settings', 'current');
    const unsub = onSnapshot(habitsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setHabits(data.habits || []);
        setGoals(data.goals || []);
        setHistory(data.history || []);
      }
      setIsLoading(false);
    }, (err) => {
      setIsLoading(false);
    });
    return () => unsub();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const communityRef = collection(db, 'artifacts', appId, 'public', 'data', 'users');
    const unsub = onSnapshot(communityRef, (querySnapshot) => {
      const progress = [];
      querySnapshot.forEach((doc) => {
        if (doc.id !== user.uid) {
          progress.push({ id: doc.id, ...doc.data() });
        }
      });
      setCommunityProgress(progress);
    });
    return () => unsub();
  }, [user]);

  const saveData = async (updatedHabits, updatedGoals, updatedHistory) => {
    if (!user) return;
    
    const h = updatedHabits || habits;
    const g = updatedGoals || goals;
    const hist = updatedHistory || history;

    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'settings', 'current'), {
      habits: h,
      goals: g,
      history: hist,
      lastUpdate: Date.now()
    });

    const metHabits = h.filter(habit => getCompletedCount(habit.completed) >= habit.targetDays).length;
    const metGoals = g.filter(goal => goal.completed).length;
    const totalItems = h.length + g.length;
    const score = Math.round(((metHabits + metGoals) / (totalItems || 1)) * 100);

    await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'users', user.uid), {
      displayName: userName || `Usuario ${user.uid.substring(0, 4)}`,
      score: score,
      habitsCount: h.length,
      metHabits: metHabits,
      lastActive: Date.now()
    });
  };

  const getCompletedCount = (completedArray) => completedArray.filter(Boolean).length;

  const handleAddHabit = (e) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;
    const newHabit = {
      id: Date.now(),
      name: newHabitName,
      completed: new Array(7).fill(false),
      targetDays: parseInt(newHabitTarget) || 7
    };
    const updated = [...habits, newHabit];
    setHabits(updated);
    saveData(updated, goals, history);
    setNewHabitName('');
  };

  const toggleHabitDay = (habitId, dayIndex) => {
    const updated = habits.map(h => {
      if (h.id === habitId) {
        const newCompleted = [...h.completed];
        newCompleted[dayIndex] = !newCompleted[dayIndex];
        return { ...h, completed: newCompleted };
      }
      return h;
    });
    setHabits(updated);
    saveData(updated, goals, history);
  };

  const deleteHabit = (id) => {
    const updated = habits.filter(h => h.id !== id);
    setHabits(updated);
    saveData(updated, goals, history);
  };

  const toggleGoal = (id) => {
    const updated = goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g);
    setGoals(updated);
    saveData(habits, updated, history);
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    const newGoal = { id: Date.now(), text: newGoalText, completed: false };
    const updated = [...goals, newGoal];
    setGoals(updated);
    saveData(habits, updated, history);
    setNewGoalText('');
  };

  const finishWeek = () => {
    const habitDetails = habits.map(h => ({
      name: h.name,
      count: getCompletedCount(h.completed),
      target: h.targetDays,
      met: getCompletedCount(h.completed) >= h.targetDays
    }));

    const metHabits = habitDetails.filter(d => d.met).length;
    const metGoals = goals.filter(g => g.completed).length;
    
    const newHistoryItem = {
      id: Date.now(),
      date: `Semana del ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}`,
      habitsStats: { met: metHabits, total: habits.length },
      goalsStats: { met: metGoals, total: goals.length },
      score: Math.round(((metHabits + metGoals) / ((habits.length + goals.length) || 1)) * 100),
      details: habitDetails
    };

    const newHistory = [newHistoryItem, ...history];
    const resetHabits = habits.map(h => ({ ...h, completed: new Array(7).fill(false) }));
    const resetGoals = goals.map(g => ({ ...g, completed: false }));

    setHistory(newHistory);
    setHabits(resetHabits);
    setGoals(resetGoals);
    saveData(resetHabits, resetGoals, newHistory);
    setShowConfirmFinish(false);
    setActiveTab('historial');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-28">
      <header className="bg-indigo-600 text-white p-6 shadow-lg rounded-b-3xl">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Award className="w-8 h-8" /> Mi Progreso
            </h1>
            <input 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={() => saveData()}
              className="bg-indigo-700/50 border-none text-indigo-100 text-xs px-2 py-1 rounded focus:ring-1 focus:ring-white outline-none w-32 mt-2"
              placeholder="Tu nombre..."
            />
          </div>
          <button onClick={() => setShowConfirmFinish(true)} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
            <Archive className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200 sticky top-4 z-10">
          {[
            { id: 'habitos', icon: Calendar, label: 'Hoy' },
            { id: 'objetivos', icon: ListTodo, label: 'Metas' },
            { id: 'comunidad', icon: Users, label: 'Social' },
            { id: 'historial', icon: History, label: 'Historial' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all ${
                activeTab === tab.id ? 'bg-indigo-100 text-indigo-700 font-bold' : 'text-slate-400'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-[9px] uppercase font-bold">{tab.label}</span>
            </button>
          ))}
        </div>

        {showConfirmFinish && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white rounded-2xl p-6 w-full max-w-xs shadow-2xl space-y-4 text-center">
              <h3 className="text-lg font-bold">¿Cerrar semana?</h3>
              <p className="text-sm text-slate-500">Se guardará tu progreso y se resetearán los círculos.</p>
              <div className="flex gap-3">
                <button onClick={() => setShowConfirmFinish(false)} className="flex-1 py-3 rounded-xl bg-slate-100 font-bold">No</button>
                <button onClick={finishWeek} className="flex-1 py-3 rounded-xl bg-indigo-600 font-bold text-white shadow-lg">Sí, archivar</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'habitos' && (
          <div className="space-y-4">
            <form onSubmit={handleAddHabit} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-3">
              <input 
                type="text" placeholder="Nuevo hábito..." 
                value={newHabitName} onChange={(e) => setNewHabitName(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500">META:</span>
                <input 
                  type="number" min="1" max="7" value={newHabitTarget}
                  onChange={(e) => setNewHabitTarget(e.target.value)}
                  className="w-12 p-2 rounded-lg border border-slate-200 text-center font-bold text-indigo-600"
                />
                <button type="submit" className="flex-1 bg-indigo-600 text-white p-2 rounded-xl font-bold flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" /> Añadir
                </button>
              </div>
            </form>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100 overflow-hidden">
              {habits.length === 0 ? (
                <p className="p-8 text-center text-slate-400 text-sm italic">No hay hábitos aún.</p>
              ) : habits.map(habit => {
                const completedCount = getCompletedCount(habit.completed);
                const isGoalMet = completedCount >= habit.targetDays;
                return (
                  <div key={habit.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{habit.name}</h3>
                        <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${isGoalMet ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                          {completedCount}/{habit.targetDays} días
                        </span>
                      </div>
                      <button onClick={() => deleteHabit(habit.id)} className="text-slate-200 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    <div className="flex justify-between items-center px-1">
                      {daysOfWeek.map((day, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1.5">
                          <span className="text-[10px] font-bold text-slate-300">{day}</span>
                          <button 
                            onClick={() => toggleHabitDay(habit.id, idx)}
                            className={`w-9 h-9 rounded-xl flex items-center justify-center border-2 transition-all ${
                              habit.completed[idx] ? 'bg-emerald-500 border-emerald-500 text-white shadow-md' : 'bg-white border-slate-100'
                            }`}
                          >
                            {habit.completed[idx] && <CheckCircle2 className="w-5 h-5" />}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'objetivos' && (
          <div className="space-y-4">
            <form onSubmit={handleAddGoal} className="flex gap-2">
              <input 
                type="text" placeholder="Meta semanal..." value={newGoalText}
                onChange={(e) => setNewGoalText(e.target.value)}
                className="flex-1 p-3 rounded-xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" className="bg-indigo-600 text-white p-3 rounded-xl"><Plus className="w-6 h-6" /></button>
            </form>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100">
              {goals.length === 0 ? (
                <p className="p-8 text-center text-slate-400 text-sm italic">Define tus metas de la semana.</p>
              ) : goals.map(goal => (
                <div key={goal.id} className="flex items-center gap-3 p-4">
                  <button onClick={() => toggleGoal(goal.id)} className={`transition-all ${goal.completed ? 'text-emerald-500' : 'text-slate-200'}`}>
                    {goal.completed ? <CheckSquare className="w-7 h-7" /> : <Circle className="w-7 h-7" />}
                  </button>
                  <span className={`flex-1 font-medium ${goal.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>{goal.text}</span>
                  <button onClick={() => deleteGoal(goal.id)} className="text-slate-200 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'comunidad' && (
          <div className="space-y-3">
             <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 mb-2">
              <p className="text-xs text-indigo-700 font-medium text-center">¡Compite con tus amigos! Los demás verán tu porcentaje de éxito semanal.</p>
            </div>
            {communityProgress.length === 0 ? (
              <p className="p-8 text-center text-slate-400 text-sm italic">No hay otros usuarios activos aún.</p>
            ) : communityProgress.sort((a,b) => b.score - a.score).map((other) => (
              <div key={other.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><User className="w-6 h-6" /></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-700 text-sm">{other.displayName}</span>
                    <span className="text-xs font-black text-indigo-600">{other.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${other.score}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'historial' && (
          <div className="space-y-3">
            {history.length === 0 ? (
              <p className="p-8 text-center text-slate-400 text-sm italic">Tu historial aparecerá aquí al finalizar la semana.</p>
            ) : history.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">{item.date}</div>
                    <div className="text-lg font-black text-slate-800">{item.score}% Éxito</div>
                  </div>
                  <div className="text-right text-[10px] font-bold text-slate-500">
                    <div>Hábitos: {item.habitsStats.met}/{item.habitsStats.total}</div>
                    <div>Metas: {item.goalsStats.met}/{item.goalsStats.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex justify-around text-xs font-medium text-slate-500 shadow-lg z-20">
        <div className="flex flex-col items-center">
          <span className="text-indigo-600 text-lg font-black">{habits.length}</span>
          <span className="uppercase tracking-wider text-[9px] font-bold">Míos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-emerald-600 text-lg font-black">
            {habits.filter(h => getCompletedCount(h.completed) >= h.targetDays).length}
          </span>
          <span className="uppercase tracking-wider text-[9px] font-bold text-emerald-600">Cumplidos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-indigo-600 text-lg font-black">{communityProgress.length}</span>
          <span className="uppercase tracking-wider text-[9px] font-bold">Amigos</span>
        </div>
      </div>
    </div>
  );
};

export default App;
