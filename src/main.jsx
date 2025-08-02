import './style.css'

document.querySelector('#root').innerHTML = `
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <div class="logo">
          <span class="logo-icon">🏠</span>
          <h1>טיפול בבית</h1>
        </div>
        <nav class="main-nav">
          <button class="nav-btn active" data-section="dashboard">דשבורד</button>
          <button class="nav-btn" data-section="patients">מטופלים</button>
          <button class="nav-btn" data-section="caregivers">מטפלים</button>
          <button class="nav-btn" data-section="schedule">לוח זמנים</button>
          <button class="nav-btn" data-section="reports">דוחות</button>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <div class="content-section active" id="dashboard">
        <div class="section-header">
          <h2>דשבורד ראשי</h2>
          <p>סקירה כללית של המערכת</p>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-info">
              <h3>24</h3>
              <p>מטופלים פעילים</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">👨‍⚕️</div>
            <div class="stat-info">
              <h3>8</h3>
              <p>מטפלים זמינים</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">📅</div>
            <div class="stat-info">
              <h3>12</h3>
              <p>ביקורים היום</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">⏰</div>
            <div class="stat-info">
              <h3>3</h3>
              <p>ביקורים דחופים</p>
            </div>
          </div>
        </div>

        <div class="dashboard-sections">
          <div class="recent-activities">
            <h3>פעילות אחרונה</h3>
            <div class="activity-list">
              <div class="activity-item">
                <span class="activity-time">09:30</span>
                <span class="activity-text">ביקור אצל שרה כהן הושלם</span>
              </div>
              <div class="activity-item">
                <span class="activity-time">08:45</span>
                <span class="activity-text">מטפל חדש נרשם למערכת</span>
              </div>
              <div class="activity-item">
                <span class="activity-time">08:15</span>
                <span class="activity-text">ביקור דחוף נקבע לאברהם לוי</span>
              </div>
            </div>
          </div>

          <div class="upcoming-visits">
            <h3>ביקורים הבאים</h3>
            <div class="visit-list">
              <div class="visit-item">
                <div class="visit-time">10:30</div>
                <div class="visit-details">
                  <strong>רחל גולדברג</strong>
                  <span>מטפל: דר' אבי כהן</span>
                </div>
              </div>
              <div class="visit-item">
                <div class="visit-time">11:15</div>
                <div class="visit-details">
                  <strong>משה רוזן</strong>
                  <span>מטפל: אחות מירי</span>
                </div>
              </div>
              <div class="visit-item urgent">
                <div class="visit-time">12:00</div>
                <div class="visit-details">
                  <strong>יוסף דוד</strong>
                  <span>ביקור דחוף</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section" id="patients">
        <div class="section-header">
          <h2>ניהול מטופלים</h2>
          <button class="add-btn">+ הוסף מטופל</button>
        </div>
        <div class="placeholder">
          <p>רשימת המטופלים תוצג כאן</p>
        </div>
      </div>

      <div class="content-section" id="caregivers">
        <div class="section-header">
          <h2>ניהול מטפלים</h2>
          <button class="add-btn">+ הוסף מטפל</button>
        </div>
        <div class="placeholder">
          <p>רשימת המטפלים תוצג כאן</p>
        </div>
      </div>

      <div class="content-section" id="schedule">
        <div class="section-header">
          <h2>לוח זמנים</h2>
          <button class="add-btn">+ קבע ביקור</button>
        </div>
        <div class="placeholder">
          <p>לוח הזמנים יוצג כאן</p>
        </div>
      </div>

      <div class="content-section" id="reports">
        <div class="section-header">
          <h2>דוחות ונתונים</h2>
          <button class="add-btn">+ צור דוח</button>
        </div>
        <div class="placeholder">
          <p>הדוחות יוצגו כאן</p>
        </div>
      </div>
    </main>
  </div>
`

// Navigation functionality
const navButtons = document.querySelectorAll('.nav-btn')
const contentSections = document.querySelectorAll('.content-section')

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = button.dataset.section
    
    // Remove active class from all buttons and sections
    navButtons.forEach(btn => btn.classList.remove('active'))
    contentSections.forEach(section => section.classList.remove('active'))
    
    // Add active class to clicked button and corresponding section
    button.classList.add('active')
    document.getElementById(targetSection).classList.add('active')
  })
})

// Add button functionality
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    alert('פונקציונליות זו תתווסף בקרוב')
  }
})