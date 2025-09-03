<!-- Face image and blurb -->
<style>
  .flip-indicator {
    font-size: 2rem;
    color: #ff7a00;
    margin-right: 1rem;
    margin-left: 0.5rem;
    transition: transform 0.3s cubic-bezier(.68,-0.55,.27,1.55);
    user-select: none;
    cursor: pointer;
    opacity: 0.85;
  }
  #profileSwap:hover .flip-indicator {
    transform: rotateY(180deg) scale(1.2);
    opacity: 1;
  }
  .profile-right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 2rem;
  }
  .profile-text {
    text-align: right;
    min-width: 220px;
    flex: 1;
  }
  #profileImg {
    margin-left: 2rem;
    margin-right: 0;
    float: right;
    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  }
</style>

<div class="profile-right mb-4" id="profileSwap" style="cursor:pointer;">
  <img id="profileImg" src="face-megalisp.png" alt="Avatar" class="rounded shadow" style="width:128px;height:128px;object-fit:cover;transition:box-shadow 0.2s;">
  <div class="profile-text">
    <h2 class="mb-1 d-flex align-items-center justify-content-end" id="profileName">
      <span id="profileNameText">MEGALISP (@megalisp)</span>
      <span class="flip-indicator" id="flipIndicator" title="Click to flip profile">&#x21bb;</span>
    </h2>
    <p class="lead mb-0" id="profileDesc">Creative coding, language playground, and expressive tools for hackers, artists, and thinkers. Where code meets imagination.</p>
  </div>
</div>

<script>
  // Avatar/name swap logic
  const profiles = [
    {
      img: 'face-megalisp.png',
      name: 'MEGALISP (@megalisp)',
      desc: 'Persona Non Granta.'
    },
    {
      img: 'face-jostgrant.png',
      name: 'Joshua Steven Grant (Jost Grant)',
      desc: 'The Head In The Helmet.'
    }
  ];
  let current = 0;
  function updateProfile(idx) {
    document.getElementById('profileImg').src = profiles[idx].img;
    document.getElementById('profileNameText').textContent = profiles[idx].name;
    document.getElementById('profileDesc').textContent = profiles[idx].desc;
  }
  document.getElementById('profileSwap').onclick = function() {
    current = 1 - current;
    updateProfile(current);
    // Animate indicator
    document.getElementById('flipIndicator').style.transform = 'rotateY(360deg) scale(1.3)';
    setTimeout(function(){
      document.getElementById('flipIndicator').style.transform = '';
    }, 350);
  };
</script>

<div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">About Megalisp</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</p>
  </div>
</div>
<div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">What to Expect</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  </div>
</div>
