<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.5">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #5a00b6; -webkit-text-stroke: #5a00b6}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #175f20; -webkit-text-stroke: #175f20}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #125c5a; -webkit-text-stroke: #125c5a}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; -webkit-text-stroke: #000000; min-height: 16.0px}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #3c3f43; -webkit-text-stroke: #3c3f43}
    span.s1 {font-kerning: none; color: #5a00b6; background-color: #e7edf5; -webkit-text-stroke: 0px #5a00b6}
    span.s2 {font-kerning: none; background-color: #e7edf5}
    span.s3 {font-kerning: none; color: #125c5a; background-color: #e7edf5; -webkit-text-stroke: 0px #125c5a}
    span.s4 {font-kerning: none; color: #175f20; background-color: #e7edf5; -webkit-text-stroke: 0px #175f20}
    span.s5 {font-kerning: none; background-color: #e7edf5; -webkit-text-stroke: 0px #000000}
    span.s6 {font-kerning: none}
    span.s7 {font-kerning: none; color: #91330c; background-color: #e7edf5; -webkit-text-stroke: 0px #91330c}
    span.s8 {font-kerning: none; color: #af051c; background-color: #e7edf5; -webkit-text-stroke: 0px #af051c}
  </style>
</head>
<body>
<p class="p1"><span class="s1">import</span><span class="s2"> </span><span class="s3">React</span><span class="s2">, { useState, useEffect } </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'react'</span><span class="s2">;</span></p>
<p class="p1"><span class="s1">import</span><span class="s2"> { initializeApp } </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'firebase/app'</span><span class="s2">;</span></p>
<p class="p2"><span class="s2">import</span><span class="s5"> {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>getFirestore,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>collection,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>doc,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>setDoc,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>onSnapshot,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>query,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>getDoc<span class="Apple-converted-space"> </span></span></p>
<p class="p3"><span class="s5">} </span><span class="s1">from</span><span class="s5"> </span><span class="s2">'firebase/firestore'</span><span class="s5">;</span></p>
<p class="p2"><span class="s2">import</span><span class="s5"> {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>getAuth,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>signInAnonymously,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>signInWithCustomToken,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>onAuthStateChanged<span class="Apple-converted-space"> </span></span></p>
<p class="p3"><span class="s5">} </span><span class="s1">from</span><span class="s5"> </span><span class="s2">'firebase/auth'</span><span class="s5">;</span></p>
<p class="p2"><span class="s2">import</span><span class="s5"> {<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">CheckCircle2</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">Circle</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s3">Plus</span><span class="s2">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">Trash2</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">Calendar</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">Award</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">CheckSquare</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">ListTodo</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">Target</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">History</span><span class="s5">,<span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">Archive</span><span class="s5">,</span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">ChevronDown</span><span class="s5">,</span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">ChevronUp</span><span class="s5">,</span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">Users</span><span class="s5">,</span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">User</span><span class="s5">,</span></p>
<p class="p4"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">RefreshCw</span></p>
<p class="p3"><span class="s5">} </span><span class="s1">from</span><span class="s5"> </span><span class="s2">'lucide-react'</span><span class="s5">;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s2">// Configuración de Firebase (proporcionada por el entorno)</span></p>
<p class="p1"><span class="s1">const</span><span class="s2"> firebaseConfig = </span><span class="s3">JSON</span><span class="s2">.parse(__firebase_config);</span></p>
<p class="p1"><span class="s1">const</span><span class="s2"> app = initializeApp(firebaseConfig);</span></p>
<p class="p1"><span class="s1">const</span><span class="s2"> auth = getAuth(app);</span></p>
<p class="p1"><span class="s1">const</span><span class="s2"> db = getFirestore(app);</span></p>
<p class="p1"><span class="s1">const</span><span class="s2"> appId = </span><span class="s1">typeof</span><span class="s2"> __app_id !== </span><span class="s4">'undefined'</span><span class="s2"> ? __app_id : </span><span class="s4">'habitos-shared-v1'</span><span class="s2">;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s1">const</span><span class="s2"> </span><span class="s3">App</span><span class="s2"> = () =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [user, setUser] = useState(</span><span class="s1">null</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [userName, setUserName] = useState(</span><span class="s4">''</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [habits, setHabits] = useState([]);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [goals, setGoals] = useState([]);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [history, setHistory] = useState([]);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [communityProgress, setCommunityProgress] = useState([]);</span></p>
<p class="p5"><span class="s2"><span class="Apple-converted-space">  </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [activeTab, setActiveTab] = useState(</span><span class="s4">'habitos'</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [newHabitName, setNewHabitName] = useState(</span><span class="s4">''</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [newHabitTarget, setNewHabitTarget] = useState(</span><span class="s7">7</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [newGoalText, setNewGoalText] = useState(</span><span class="s4">''</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [showConfirmFinish, setShowConfirmFinish] = useState(</span><span class="s1">false</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> [isLoading, setIsLoading] = useState(</span><span class="s1">true</span><span class="s2">);</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> daysOfWeek = [</span><span class="s4">'L'</span><span class="s2">, </span><span class="s4">'M'</span><span class="s2">, </span><span class="s4">'X'</span><span class="s2">, </span><span class="s4">'J'</span><span class="s2">, </span><span class="s4">'V'</span><span class="s2">, </span><span class="s4">'S'</span><span class="s2">, </span><span class="s4">'D'</span><span class="s2">];</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">// 1. Autenticación inicial</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>useEffect(() =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> initAuth = </span><span class="s1">async</span><span class="s2"> () =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s1">try</span><span class="s2"> {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span></span><span class="s1">if</span><span class="s2"> (</span><span class="s1">typeof</span><span class="s2"> __initial_auth_token !== </span><span class="s4">'undefined'</span><span class="s2"> &amp;&amp; __initial_auth_token) {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span></span><span class="s1">await</span><span class="s2"> signInWithCustomToken(auth, __initial_auth_token);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>} </span><span class="s1">else</span><span class="s2"> {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span></span><span class="s1">await</span><span class="s2"> signInAnonymously(auth);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>} </span><span class="s1">catch</span><span class="s2"> (error) {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>console.error(</span><span class="s4">"Error de autenticación:"</span><span class="s2">, error);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>initAuth();</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> unsubscribe = onAuthStateChanged(auth, (u) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>setUser(u);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s1">if</span><span class="s2"> (u) {</span></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span></span><span class="s2">// Cargar nombre guardado o poner uno por defecto</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>loadUserName(u.uid);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">return</span><span class="s2"> () =&gt; unsubscribe();</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>}, []);</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> loadUserName = </span><span class="s1">async</span><span class="s2"> (uid) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> userDoc = </span><span class="s1">await</span><span class="s2"> getDoc(doc(db, </span><span class="s4">'artifacts'</span><span class="s2">, appId, </span><span class="s4">'public'</span><span class="s2">, </span><span class="s4">'data'</span><span class="s2">, </span><span class="s4">'users'</span><span class="s2">, uid));</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">if</span><span class="s2"> (userDoc.exists()) {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>setUserName(userDoc.data().displayName || </span><span class="s4">`Usuario </span><span class="s2">${uid.substring(</span><span class="s7">0</span><span class="s2">, </span><span class="s7">4</span><span class="s2">)}</span><span class="s4">`</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>} </span><span class="s1">else</span><span class="s2"> {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>setUserName(</span><span class="s4">`Usuario </span><span class="s2">${uid.substring(</span><span class="s7">0</span><span class="s2">, </span><span class="s7">4</span><span class="s2">)}</span><span class="s4">`</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">// 2. Sincronización de datos del usuario</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>useEffect(() =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">if</span><span class="s2"> (!user) </span><span class="s1">return</span><span class="s2">;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> habitsRef = doc(db, </span><span class="s4">'artifacts'</span><span class="s2">, appId, </span><span class="s4">'users'</span><span class="s2">, user.uid, </span><span class="s4">'settings'</span><span class="s2">, </span><span class="s4">'current'</span><span class="s2">);</span></p>
<p class="p5"><span class="s2"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> unsub = onSnapshot(habitsRef, (docSnap) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s1">if</span><span class="s2"> (docSnap.exists()) {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span></span><span class="s1">const</span><span class="s2"> data = docSnap.data();</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>setHabits(data.habits || []);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>setGoals(data.goals || []);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>setHistory(data.history || []);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>setIsLoading(</span><span class="s1">false</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>}, (err) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>console.error(</span><span class="s4">"Error cargando datos:"</span><span class="s2">, err);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>setIsLoading(</span><span class="s1">false</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">return</span><span class="s2"> () =&gt; unsub();</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>}, [user]);</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">// 3. Sincronización de la Comunidad</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>useEffect(() =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">if</span><span class="s2"> (!user) </span><span class="s1">return</span><span class="s2">;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> communityRef = collection(db, </span><span class="s4">'artifacts'</span><span class="s2">, appId, </span><span class="s4">'public'</span><span class="s2">, </span><span class="s4">'data'</span><span class="s2">, </span><span class="s4">'users'</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> unsub = onSnapshot(communityRef, (querySnapshot) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s1">const</span><span class="s2"> progress = [];</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>querySnapshot.forEach((doc) =&gt; {</span></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span></span><span class="s1">if</span><span class="s5"> (doc.id !== user.uid) { </span><span class="s2">// No mostrarse a uno mismo en la lista</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>progress.push({ id: doc.id, ...doc.data() });</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>});</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>setCommunityProgress(progress);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">return</span><span class="s2"> () =&gt; unsub();</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>}, [user]);</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">// 4. Guardar cambios y actualizar perfil público</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> saveData = </span><span class="s1">async</span><span class="s2"> (updatedHabits, updatedGoals, updatedHistory) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">if</span><span class="s2"> (!user) </span><span class="s1">return</span><span class="s2">;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">    </span></span><span class="s2">// Guardar datos privados</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">await</span><span class="s2"> setDoc(doc(db, </span><span class="s4">'artifacts'</span><span class="s2">, appId, </span><span class="s4">'users'</span><span class="s2">, user.uid, </span><span class="s4">'settings'</span><span class="s2">, </span><span class="s4">'current'</span><span class="s2">), {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>habits: updatedHabits || habits,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>goals: updatedGoals || goals,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>history: updatedHistory || history,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>lastUpdate: </span><span class="s3">Date</span><span class="s2">.now()</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">    </span></span><span class="s2">// Actualizar perfil público para la comunidad</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> metHabits = (updatedHabits || habits).filter(h =&gt; getCompletedCount(h.completed) &gt;= h.targetDays).length;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> metGoals = (updatedGoals || goals).filter(g =&gt; g.completed).length;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> totalItems = (updatedHabits || habits).length + (updatedGoals || goals).length;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> score = </span><span class="s3">Math</span><span class="s2">.round(((metHabits + metGoals) / (totalItems || </span><span class="s7">1</span><span class="s2">)) * </span><span class="s7">100</span><span class="s2">);</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">await</span><span class="s2"> setDoc(doc(db, </span><span class="s4">'artifacts'</span><span class="s2">, appId, </span><span class="s4">'public'</span><span class="s2">, </span><span class="s4">'data'</span><span class="s2">, </span><span class="s4">'users'</span><span class="s2">, user.uid), {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>displayName: userName,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>score: score,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>habitsCount: (updatedHabits || habits).length,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>metHabits: metHabits,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>lastActive: </span><span class="s3">Date</span><span class="s2">.now()</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> getCompletedCount = (completedArray) =&gt; completedArray.filter(</span><span class="s3">Boolean</span><span class="s2">).length;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> handleAddHabit = (e) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>e.preventDefault();</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">if</span><span class="s2"> (!newHabitName.trim()) </span><span class="s1">return</span><span class="s2">;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> newHabit = {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>id: </span><span class="s3">Date</span><span class="s2">.now(),</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>name: newHabitName,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>completed: </span><span class="s1">new</span><span class="s2"> </span><span class="s3">Array</span><span class="s2">(</span><span class="s7">7</span><span class="s2">).fill(</span><span class="s1">false</span><span class="s2">),</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>targetDays: parseInt(newHabitTarget) || </span><span class="s7">7</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> updated = [...habits, newHabit];</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setHabits(updated);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>saveData(updated, goals, history);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setNewHabitName(</span><span class="s4">''</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> toggleHabitDay = (habitId, dayIndex) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> updated = habits.map(h =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s1">if</span><span class="s2"> (h.id === habitId) {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span></span><span class="s1">const</span><span class="s2"> newCompleted = [...h.completed];</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>newCompleted[dayIndex] = !newCompleted[dayIndex];</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span></span><span class="s1">return</span><span class="s2"> { ...h, completed: newCompleted };</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s1">return</span><span class="s2"> h;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setHabits(updated);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>saveData(updated, goals, history);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> deleteHabit = (id) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> updated = habits.filter(h =&gt; h.id !== id);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setHabits(updated);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>saveData(updated, goals, history);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> toggleGoal = (id) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> updated = goals.map(g =&gt; g.id === id ? { ...g, completed: !g.completed } : g);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setGoals(updated);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>saveData(habits, updated, history);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> handleAddGoal = (e) =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>e.preventDefault();</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">if</span><span class="s2"> (!newGoalText.trim()) </span><span class="s1">return</span><span class="s2">;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> newGoal = { id: </span><span class="s3">Date</span><span class="s2">.now(), text: newGoalText, completed: </span><span class="s1">false</span><span class="s2"> };</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> updated = [...goals, newGoal];</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setGoals(updated);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>saveData(habits, updated, history);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setNewGoalText(</span><span class="s4">''</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> finishWeek = () =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> habitDetails = habits.map(h =&gt; ({</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>name: h.name,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>count: getCompletedCount(h.completed),</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>target: h.targetDays,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>met: getCompletedCount(h.completed) &gt;= h.targetDays</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>}));</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> metHabits = habitDetails.filter(d =&gt; d.met).length;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> metGoals = goals.filter(g =&gt; g.completed).length;</span></p>
<p class="p5"><span class="s2"><span class="Apple-converted-space">    </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> newHistoryItem = {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>id: </span><span class="s3">Date</span><span class="s2">.now(),</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>date: </span><span class="s4">`Semana del </span><span class="s2">${</span><span class="s1">new</span><span class="s2"> </span><span class="s3">Date</span><span class="s2">().toLocaleDateString(</span><span class="s4">'es-ES'</span><span class="s2">, { day: </span><span class="s4">'numeric'</span><span class="s2">, month: </span><span class="s4">'short'</span><span class="s2"> })}</span><span class="s4">`</span><span class="s2">,</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>habitsStats: { met: metHabits, total: habits.length },</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>goalsStats: { met: metGoals, total: goals.length },</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>score: </span><span class="s3">Math</span><span class="s2">.round(((metHabits + metGoals) / ((habits.length + goals.length) || </span><span class="s7">1</span><span class="s2">)) * </span><span class="s7">100</span><span class="s2">),</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>details: habitDetails</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> newHistory = [newHistoryItem, ...history];</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> resetHabits = habits.map(h =&gt; ({ ...h, completed: </span><span class="s1">new</span><span class="s2"> </span><span class="s3">Array</span><span class="s2">(</span><span class="s7">7</span><span class="s2">).fill(</span><span class="s1">false</span><span class="s2">) }));</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> resetGoals = goals.map(g =&gt; ({ ...g, completed: </span><span class="s1">false</span><span class="s2"> }));</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setHistory(newHistory);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setHabits(resetHabits);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setGoals(resetGoals);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>saveData(resetHabits, resetGoals, newHistory);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setShowConfirmFinish(</span><span class="s1">false</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>setActiveTab(</span><span class="s4">'historial'</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">if</span><span class="s2"> (isLoading) {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">return</span><span class="s2"> (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">      </span>&lt;div className=</span><span class="s2">"min-h-screen bg-slate-50 flex items-center justify-center"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>&lt;</span><span class="s3">RefreshCw</span><span class="s5"> className=</span><span class="s2">"w-8 h-8 text-indigo-500 animate-spin"</span><span class="s5"> /&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p2"><span class="s5"><span class="Apple-converted-space">  </span></span><span class="s2">return</span><span class="s5"> (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">    </span>&lt;div className=</span><span class="s2">"min-h-screen bg-slate-50 text-slate-900 font-sans pb-28"</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">      </span>{</span><span class="s2">/* Header */</span><span class="s5">}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">      </span>&lt;header className=</span><span class="s2">"bg-indigo-600 text-white p-6 shadow-lg rounded-b-3xl"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s2">"flex justify-between items-start"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;div&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>&lt;h1 className=</span><span class="s2">"text-2xl font-bold flex items-center gap-2"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;</span><span class="s3">Award</span><span class="s2"> className=</span><span class="s4">"w-8 h-8"</span><span class="s2"> /&gt; </span><span class="s3">Mi</span><span class="s2"> </span><span class="s3">Progreso</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/h1&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>&lt;div className=</span><span class="s2">"flex items-center gap-2 mt-1"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">               </span>&lt;input<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>value={userName}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>onChange={(e) =&gt; setUserName(e.target.value)}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>onBlur={() =&gt; saveData()}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                </span>className=</span><span class="s2">"bg-indigo-700/50 border-none text-indigo-100 text-xs px-2 py-1 rounded focus:ring-1 focus:ring-white outline-none w-32"</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>placeholder=</span><span class="s4">"Tu nombre..."</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">               </span>/&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;button<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>onClick={() =&gt; setShowConfirmFinish(</span><span class="s1">true</span><span class="s2">)}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>className=</span><span class="s2">"bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;</span><span class="s3">Archive</span><span class="s2"> className=</span><span class="s4">"w-5 h-5"</span><span class="s2"> /&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>&lt;/header&gt;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">      </span>&lt;main className=</span><span class="s2">"max-w-md mx-auto p-4 space-y-6"</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span>{</span><span class="s2">/* Navigation Tabs */</span><span class="s5">}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s2">"flex bg-white p-1 rounded-xl shadow-sm border border-slate-200 sticky top-4 z-10"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>{[</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>{ id: </span><span class="s4">'habitos'</span><span class="s2">, icon: </span><span class="s3">Calendar</span><span class="s2">, label: </span><span class="s4">'Hoy'</span><span class="s2"> },</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>{ id: </span><span class="s4">'objetivos'</span><span class="s2">, icon: </span><span class="s3">ListTodo</span><span class="s2">, label: </span><span class="s4">'Metas'</span><span class="s2"> },</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>{ id: </span><span class="s4">'comunidad'</span><span class="s2">, icon: </span><span class="s3">Users</span><span class="s2">, label: </span><span class="s4">'Social'</span><span class="s2"> },</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>{ id: </span><span class="s4">'historial'</span><span class="s2">, icon: </span><span class="s3">History</span><span class="s2">, label: </span><span class="s4">'Historial'</span><span class="s2"> }</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>].map((tab) =&gt; (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;button<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>key={tab.id}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>onClick={() =&gt; setActiveTab(tab.id)}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">              </span>className={</span><span class="s2">`flex-1 py-2 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all </span><span class="s5">${</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                </span>activeTab === tab.id ? </span><span class="s2">'bg-indigo-100 text-indigo-700 font-bold'</span><span class="s5"> : </span><span class="s2">'text-slate-400'</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>}</span><span class="s4">`</span><span class="s2">}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;tab.icon className=</span><span class="s4">"w-4 h-4"</span><span class="s2"> /&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;span className=</span><span class="s4">"text-[9px] uppercase font-bold"</span><span class="s2">&gt;{tab.label}&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>))}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span>{</span><span class="s2">/* Modal Finish Week */</span><span class="s5">}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>{showConfirmFinish &amp;&amp; (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;div className=</span><span class="s2">"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>&lt;div className=</span><span class="s2">"bg-white rounded-2xl p-6 w-full max-w-xs shadow-2xl space-y-4"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">              </span>&lt;h3 className=</span><span class="s2">"text-lg font-bold text-slate-800 text-center"</span><span class="s5">&gt;</span><span class="s8">¿</span><span class="s3">Cerrar</span><span class="s5"> semana?&lt;/h3&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;p className=</span><span class="s4">"text-sm text-slate-500 text-center"</span><span class="s2">&gt;</span><span class="s3">Tu</span><span class="s2"> progreso se guardar</span><span class="s8">á</span><span class="s2"> en la nube y se resetear</span><span class="s8">á</span><span class="s2">n tus c</span><span class="s8">í</span><span class="s2">rculos.&lt;/p&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;div className=</span><span class="s4">"flex gap-3"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;button onClick={() =&gt; setShowConfirmFinish(</span><span class="s1">false</span><span class="s2">)} className=</span><span class="s4">"flex-1 py-3 rounded-xl bg-slate-100 font-bold text-slate-600"</span><span class="s2">&gt;</span><span class="s3">No</span><span class="s2">&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;button onClick={finishWeek} className=</span><span class="s4">"flex-1 py-3 rounded-xl bg-indigo-600 font-bold text-white shadow-lg"</span><span class="s2">&gt;</span><span class="s3">S</span><span class="s8">í</span><span class="s2">, archivar&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>)}</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span>{</span><span class="s2">/* Content: HABITS */</span><span class="s5">}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>{activeTab === </span><span class="s4">'habitos'</span><span class="s2"> &amp;&amp; (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;div className=</span><span class="s2">"space-y-4 animate-in slide-in-from-left-2 duration-300"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>&lt;form onSubmit={handleAddHabit} className=</span><span class="s2">"bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-3"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;input<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span></span><span class="s1">type</span><span class="s2">=</span><span class="s4">"text"</span><span class="s2"> placeholder=</span><span class="s4">"Nuevo hábito..."</span><span class="s2"><span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>value={newHabitName} onChange={(e) =&gt; setNewHabitName(e.target.value)}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                </span>className=</span><span class="s2">"w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>/&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;div className=</span><span class="s4">"flex items-center gap-3"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;span className=</span><span class="s4">"text-xs font-bold text-slate-500"</span><span class="s2">&gt;</span><span class="s3">META</span><span class="s2">:&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;input<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span></span><span class="s1">type</span><span class="s2">=</span><span class="s4">"number"</span><span class="s2"> min=</span><span class="s4">"1"</span><span class="s2"> max=</span><span class="s4">"7"</span><span class="s2"> value={newHabitTarget}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>onChange={(e) =&gt; setNewHabitTarget(e.target.value)}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                  </span>className=</span><span class="s2">"w-12 p-2 rounded-lg border border-slate-200 text-center font-bold text-indigo-600"</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>/&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                </span>&lt;button </span><span class="s1">type</span><span class="s5">=</span><span class="s2">"submit"</span><span class="s5"> className=</span><span class="s2">"flex-1 bg-indigo-600 text-white p-2 rounded-xl font-bold flex items-center justify-center gap-2"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;</span><span class="s3">Plus</span><span class="s2"> className=</span><span class="s4">"w-5 h-5"</span><span class="s2"> /&gt; </span><span class="s3">A</span><span class="s8">ñ</span><span class="s2">adir</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/form&gt;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>&lt;div className=</span><span class="s2">"bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100 overflow-hidden"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>{habits.length === </span><span class="s7">0</span><span class="s2"> ? (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;p className=</span><span class="s4">"p-8 text-center text-slate-400 italic text-sm"</span><span class="s2">&gt;</span><span class="s3">Sin</span><span class="s2"> h</span><span class="s8">á</span><span class="s2">bitos activos.&lt;/p&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>) : (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>habits.map(habit =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span></span><span class="s1">const</span><span class="s2"> completedCount = getCompletedCount(habit.completed);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span></span><span class="s1">const</span><span class="s2"> isGoalMet = completedCount &gt;= habit.targetDays;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span></span><span class="s1">return</span><span class="s2"> (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;div key={habit.id} className=</span><span class="s4">"p-4 space-y-3"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;div className=</span><span class="s4">"flex justify-between items-start"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>&lt;div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                          </span>&lt;h3 className=</span><span class="s4">"font-semibold text-slate-800"</span><span class="s2">&gt;{habit.name}&lt;/h3&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                          </span>&lt;span className={</span><span class="s2">`text-[9px] font-black uppercase px-1.5 py-0.5 rounded </span><span class="s5">${isGoalMet ? </span><span class="s2">'bg-emerald-100 text-emerald-700'</span><span class="s5"> : </span><span class="s2">'bg-slate-100 text-slate-500'</span><span class="s5">}</span><span class="s2">`</span><span class="s5">}&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                            </span>{completedCount}/{habit.targetDays} d</span><span class="s8">í</span><span class="s1">as</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                          </span>&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>&lt;button onClick={() =&gt; deleteHabit(habit.id)} className=</span><span class="s4">"text-slate-200 hover:text-red-400"</span><span class="s2">&gt;&lt;</span><span class="s3">Trash2</span><span class="s2"> className=</span><span class="s4">"w-4 h-4"</span><span class="s2"> /&gt;&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;/div&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                      </span>&lt;div className=</span><span class="s2">"flex justify-between items-center px-1"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>{daysOfWeek.map((day, idx) =&gt; (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                          </span>&lt;div key={idx} className=</span><span class="s4">"flex flex-col items-center gap-1.5"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                            </span>&lt;span className=</span><span class="s4">"text-[10px] font-bold text-slate-300"</span><span class="s2">&gt;{day}&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                            </span>&lt;button<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                              </span>onClick={() =&gt; toggleHabitDay(habit.id, idx)}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                              </span>className={</span><span class="s2">`w-9 h-9 rounded-xl flex items-center justify-center transition-all border-2 </span><span class="s5">${</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                                </span>habit.completed[idx] ? </span><span class="s2">'bg-emerald-500 border-emerald-500 text-white shadow-md'</span><span class="s5"> : </span><span class="s2">'bg-white border-slate-100'</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                              </span>}</span><span class="s4">`</span><span class="s2">}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                            </span>&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                              </span>{habit.completed[idx] &amp;&amp; &lt;</span><span class="s3">CheckCircle2</span><span class="s2"> className=</span><span class="s4">"w-5 h-5"</span><span class="s2"> /&gt;}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                            </span>&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>))}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>})</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>)}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>)}</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span>{</span><span class="s2">/* Content: GOALS */</span><span class="s5">}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>{activeTab === </span><span class="s4">'objetivos'</span><span class="s2"> &amp;&amp; (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;div className=</span><span class="s2">"space-y-4 animate-in slide-in-from-left-2 duration-300"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;form onSubmit={handleAddGoal} className=</span><span class="s4">"flex gap-2"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;input<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span></span><span class="s1">type</span><span class="s2">=</span><span class="s4">"text"</span><span class="s2"> placeholder=</span><span class="s4">"Meta semanal..."</span><span class="s2"> value={newGoalText}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>onChange={(e) =&gt; setNewGoalText(e.target.value)}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                </span>className=</span><span class="s2">"flex-1 p-3 rounded-xl border border-slate-200 bg-white"</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>/&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;button </span><span class="s1">type</span><span class="s2">=</span><span class="s4">"submit"</span><span class="s2"> className=</span><span class="s4">"bg-indigo-600 text-white p-3 rounded-xl"</span><span class="s2">&gt;&lt;</span><span class="s3">Plus</span><span class="s2"> className=</span><span class="s4">"w-6 h-6"</span><span class="s2"> /&gt;&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/form&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>&lt;div className=</span><span class="s2">"bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>{goals.map(goal =&gt; (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;div key={goal.id} className=</span><span class="s4">"flex items-center gap-3 p-4 group"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;button onClick={() =&gt; toggleGoal(goal.id)} className={</span><span class="s4">`transition-all </span><span class="s2">${goal.completed ? </span><span class="s4">'text-emerald-500'</span><span class="s2"> : </span><span class="s4">'text-slate-200'</span><span class="s2">}</span><span class="s4">`</span><span class="s2">}&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>{goal.completed ? &lt;</span><span class="s3">CheckSquare</span><span class="s2"> className=</span><span class="s4">"w-7 h-7"</span><span class="s2"> /&gt; : &lt;</span><span class="s3">Circle</span><span class="s2"> className=</span><span class="s4">"w-7 h-7"</span><span class="s2"> /&gt;}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;span className={</span><span class="s4">`flex-1 font-medium </span><span class="s2">${goal.completed ? </span><span class="s4">'line-through text-slate-400'</span><span class="s2"> : </span><span class="s4">'text-slate-700'</span><span class="s2">}</span><span class="s4">`</span><span class="s2">}&gt;{goal.text}&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;button onClick={() =&gt; deleteGoal(goal.id)} className=</span><span class="s4">"text-slate-200 hover:text-red-500"</span><span class="s2">&gt;&lt;</span><span class="s3">Trash2</span><span class="s2"> className=</span><span class="s4">"w-4 h-4"</span><span class="s2"> /&gt;&lt;/button&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>))}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>)}</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span>{</span><span class="s2">/* Content: COMMUNITY */</span><span class="s5">}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>{activeTab === </span><span class="s4">'comunidad'</span><span class="s2"> &amp;&amp; (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;div className=</span><span class="s2">"space-y-4 animate-in slide-in-from-right-2 duration-300"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">            </span>&lt;div className=</span><span class="s2">"bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex items-center gap-3"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">              </span>&lt;div className=</span><span class="s2">"bg-white p-2 rounded-full text-indigo-600"</span><span class="s5">&gt;&lt;</span><span class="s3">Users</span><span class="s5"> className=</span><span class="s2">"w-5 h-5"</span><span class="s5"> /&gt;&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;h2 className=</span><span class="s4">"text-sm font-bold text-indigo-900"</span><span class="s2">&gt;</span><span class="s3">Progreso</span><span class="s2"> de </span><span class="s3">Amigos</span><span class="s2">&lt;/h2&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;p className=</span><span class="s4">"text-[10px] text-indigo-600 font-medium"</span><span class="s2">&gt;</span><span class="s3">Mira</span><span class="s2"> c</span><span class="s8">ó</span><span class="s2">mo van los dem</span><span class="s8">á</span><span class="s2">s esta semana&lt;/p&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;div className=</span><span class="s4">"space-y-3"</span><span class="s2">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>{communityProgress.length === </span><span class="s7">0</span><span class="s2"> ? (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;p className=</span><span class="s4">"text-center p-8 text-slate-400 text-sm"</span><span class="s2">&gt;</span><span class="s3">A</span><span class="s8">ú</span><span class="s2">n no hay otros usuarios activos.&lt;/p&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>) : (</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>communityProgress.sort((a,b) =&gt; b.score - a.score).map((other) =&gt; (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                  </span>&lt;div key={other.id} className=</span><span class="s2">"bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                    </span>&lt;div className=</span><span class="s2">"w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;</span><span class="s3">User</span><span class="s2"> className=</span><span class="s4">"w-6 h-6"</span><span class="s2"> /&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;div className=</span><span class="s4">"flex-1"</span><span class="s2">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                      </span>&lt;div className=</span><span class="s2">"flex justify-between items-center mb-1"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>&lt;span className=</span><span class="s4">"font-bold text-slate-700 text-sm"</span><span class="s2">&gt;{other.displayName}&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>&lt;span className=</span><span class="s4">"text-xs font-black text-indigo-600"</span><span class="s2">&gt;{other.score}%&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;/div&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                      </span>&lt;div className=</span><span class="s2">"w-full h-2 bg-slate-100 rounded-full overflow-hidden"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>&lt;div<span class="Apple-converted-space"> </span></span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                          </span>className=</span><span class="s2">"h-full bg-indigo-500 transition-all duration-1000"</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                          </span>style={{ width: </span><span class="s4">`</span><span class="s2">${other.score}</span><span class="s4">%`</span><span class="s2"> }}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>/&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;div className=</span><span class="s4">"mt-1.5 flex gap-2"</span><span class="s2">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                        </span>&lt;span className=</span><span class="s2">"text-[9px] font-bold text-slate-400 uppercase tracking-tighter"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                          </span>{other.metHabits} h</span><span class="s8">á</span><span class="s2">bitos logrados</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                        </span>&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                      </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>))</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>)}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>)}</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">        </span>{</span><span class="s2">/* Content: HISTORY */</span><span class="s5">}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>{activeTab === </span><span class="s4">'historial'</span><span class="s2"> &amp;&amp; (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;div className=</span><span class="s2">"space-y-3 animate-in slide-in-from-right-2 duration-300"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>{history.map(item =&gt; (</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">              </span>&lt;div key={item.id} className=</span><span class="s2">"bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                </span>&lt;div className=</span><span class="s2">"flex justify-between items-center"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;div className=</span><span class="s4">"text-[10px] font-bold text-slate-400 uppercase"</span><span class="s2">&gt;{item.date}&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;div className=</span><span class="s4">"text-lg font-black text-slate-800"</span><span class="s2">&gt;{item.score}% </span><span class="s8">É</span><span class="s2">xito&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">                  </span>&lt;div className=</span><span class="s2">"text-right text-[10px] font-bold text-slate-500"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;div&gt;</span><span class="s3">H</span><span class="s8">á</span><span class="s2">bitos: {item.habitsStats.met}/{item.habitsStats.total}&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                    </span>&lt;div&gt;</span><span class="s3">Metas</span><span class="s2">: {item.goalsStats.met}/{item.goalsStats.total}&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>))}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>)}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>&lt;/main&gt;</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p6"><span class="s5"><span class="Apple-converted-space">      </span>{</span><span class="s2">/* Footer Summary */</span><span class="s5">}</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">      </span>&lt;div className=</span><span class="s2">"fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex justify-around text-xs font-medium text-slate-500 shadow-[0_-4px_15px_rgba(0,0,0,0.08)]"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s2">"flex flex-col items-center"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;span className=</span><span class="s4">"text-indigo-600 text-lg font-black"</span><span class="s2">&gt;{habits.length}&lt;/span&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;span className=</span><span class="s2">"uppercase tracking-wider text-[9px] font-bold"</span><span class="s5">&gt;</span><span class="s3">M</span><span class="s8">í</span><span class="s5">os&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s2">"flex flex-col items-center"</span><span class="s5">&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;span className=</span><span class="s2">"text-emerald-600 text-lg font-black"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">            </span>{habits.filter(h =&gt; getCompletedCount(h.completed) &gt;= h.targetDays).length}</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;/span&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;span className=</span><span class="s2">"uppercase tracking-wider text-[9px] font-bold text-emerald-600"</span><span class="s5">&gt;</span><span class="s3">Completos</span><span class="s5">&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s2">"flex flex-col items-center"</span><span class="s5">&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">          </span>&lt;span className=</span><span class="s4">"text-indigo-600 text-lg font-black"</span><span class="s2">&gt;{communityProgress.length}&lt;/span&gt;</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">          </span>&lt;span className=</span><span class="s2">"uppercase tracking-wider text-[9px] font-bold"</span><span class="s5">&gt;</span><span class="s3">Amigos</span><span class="s5">&lt;/span&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s2">};</span></p>
<p class="p5"><span class="s6"></span><br></p>
<p class="p2"><span class="s2">export</span><span class="s5"> </span><span class="s2">default</span><span class="s5"> </span><span class="s3">App</span><span class="s5">;</span></p>
</body>
</html>
