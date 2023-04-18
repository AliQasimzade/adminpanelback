const name = document.getElementById("name")
const image = document.getElementById("image")
const icon = document.getElementById("icon")
const submit = document.getElementById("submit")

let getImageUrl = '';


const userEmail = JSON.parse(sessionStorage.getItem('user'));
if (userEmail) {
    document.getElementById('userprofileimg').src = userEmail.image;
    document.getElementById('useremail').innerHTML = userEmail.email
    document.getElementById('profilepic').src = userEmail.image;
    document.getElementById('nameuser').innerHTML = userEmail.name;
    document.getElementById('emuser').innerHTML = userEmail.email;


} else {
    window.location.href = '/accommo-tailwind.vercel.app/sign-in.html'
}



document.getElementById('logoutBtn').addEventListener('click', (e) => {
    alert("User logout")
    sessionStorage.removeItem('user')
    location.reload()

})

const firebaseConfig = {
    apiKey: "AIzaSyCrjc7qRA9Z51nm_zJIB7FAXS9dmepEUk8",
    authDomain: "adminpanel-da8aa.firebaseapp.com",
    databaseURL: "https://adminpanel-da8aa-default-rtdb.firebaseio.com",
    projectId: "adminpanel-da8aa",
    storageBucket: "adminpanel-da8aa.appspot.com",
    messagingSenderId: "381842069412",
    appId: "1:381842069412:web:850d704de6d0cd10245331"
};

firebase.initializeApp(firebaseConfig);

let storage = firebase.storage();
 
image.addEventListener('change', (e) => {

    let file = e.target.files[0]
    let storageRef = storage.ref();
    let imagesRef = storageRef.child('images/' + file.name);

    let uploadTask = imagesRef.put(file);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        function (error) {

            console.error('Upload failed:', error);
        },
        function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                getImageUrl = downloadURL
            });
        }
    );

})


const createCategory =  async() =>{
    try {
        if(name.value == '' || getImageUrl == '') {
            alert('Please fill inputs or input !')
        }else {
            const newElement ={
                name : name.value,
                image : getImageUrl,
                icon : icon.value
            }
        
            const req = await fetch("https://restwell.az/api/createcategory" , {
                method : "POST",
                headers :{
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(newElement)
            
            })
            if(req.status !== 201) {
                throw new Error("This category already exist")
            }else {

                const res = await req.json()
                console.log(res);
                alert("Create new category successfully !")
                location.reload()
            }

        }
      
    }catch(err) {
        alert(err.message)
    }
}
submit.addEventListener("click" , createCategory )