const firebaseConfig = {
    apiKey: "AIzaSyBRnPRmDc_viiRwYPIy98GjtAOWBC4FCSY",
    authDomain: "matmata-63e35.firebaseapp.com",
    databaseURL: "https://matmata-63e35-default-rtdb.firebaseio.com",
    projectId: "matmata-63e35",
    storageBucket: "matmata-63e35.appspot.com",
    messagingSenderId: "380052391384",
    appId: "1:380052391384:web:e7a81e4658bdbbaa4b9ead"
  };
  firebase.initializeApp(firebaseConfig);
  var matmataDB=firebase.database().ref("matmata");
  document.getElementById('regForm').addEventListener('submit',subForm);
  function subForm(e){
    e.preventDefault();
    var first_name=getElementVal("first_name");
    var last_name=getElementVal("last_name");
    var email=getElementVal("Email");
    var phone=getElementVal("phone");
    var zone=getElementVal("zone");
    var olm=getElementVal("olm1");
    var type=getElementVal("type");
    console.log(first_name, last_name, email, phone, zone, olm, type);
    saveData(first_name, last_name, email, phone, zone, olm, type);
    document.getElementById('regForm').reset();
  }
  const saveData = (first_name, last_name, email, phone, zone, olm, type) => {
    var newMatmataDB = matmataDB.push();
  
    newMatmataDB.set({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      zone: zone,
      olm: olm,
      type_reg: type,
    });
  };
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  }