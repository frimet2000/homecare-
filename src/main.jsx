import './style.css'

document.querySelector('#root').innerHTML = `
  <div class="container">
    <header class="header">
      <h1>🏠 טיפול בבית</h1>
      <p>מערכת ניהול שירותי טיפול ביתי</p>
    </header>
    
    <main class="main-content">
      <div class="card">
        <h2>ברוכים הבאים</h2>
        <p>המערכת מוכנה לשימוש</p>
        <button id="test-btn" class="btn">בדיקת מערכת</button>
      </div>
    </main>
  </div>
`

document.querySelector('#test-btn').addEventListener('click', () => {
  alert('המערכת פועלת כראוי! ✅')
})