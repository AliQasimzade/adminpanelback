
const allListings = document.getElementById('allListings')
const verifyListings = document.getElementById('verifyListings')
const unverifyListings = document.getElementById('unverifyListings')
const categories = document.getElementById('categories')
const features = document.getElementById('features')
const tags = document.getElementById('tags')
const events = document.getElementById('events')
const banners = document.getElementById('banners')
const users = document.getElementById('users');
const status = document.getElementById('status');
const locations = document.getElementById('locations');
const userEmail = JSON.parse(sessionStorage.getItem('user'));
 if(userEmail) {
    document.getElementById('userprofileimg').src = userEmail.image;
    document.getElementById('useremail').innerHTML = userEmail.email
     document.getElementById('emailuser').innerHTML = userEmail.name + " " +  userEmail.surname; 
   document.getElementById('profilepic').src = userEmail.image;
   document.getElementById('nameuser').innerHTML = userEmail.name;
   document.getElementById('emuser').innerHTML = userEmail.email;


    }else {
        window.location.href = '/accommo-tailwind.vercel.app/sign-in.html'
    }



    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        alert("User logout")
        sessionStorage.removeItem('user')
        location.reload()

    })
fetch('https://restwell.az/api/listings')
.then(res => res.json())
.then(res => {
    allListings.innerHTML = res.length
    const verifyListingss = res.filter(re => re.verify == true)
    const unverifyListingss = res.filter(re => re.verify == false)
    console.log(unverifyListingss.length)
    unverifyListings.innerHTML = unverifyListingss.length
    verifyListings.innerHTML = verifyListingss.length
})

fetch('https://restwell.az/api/categories')
.then(res => res.json())
.then(res => {
    categories.innerHTML = res.length
})

fetch('https://restwell.az/api/tags')
.then(res => res.json())
.then(res => {
    tags.innerHTML = res.length
})

fetch('https://restwell.az/api/properties')
.then(res => res.json())
.then(res => {

    features.innerHTML = res.length
})
fetch('https://restwell.az/api/banners')
.then(res => res.json())
.then(res => {

    banners.innerHTML = res.length
})

fetch('https://restwell.az/api/events')
.then(res => res.json())
.then(res => {

    events.innerHTML = res.length
})
fetch('https://restwell.az/api/status')
.then(res => res.json())
.then(res => {

    status.innerHTML = res.length
})

fetch('https://restwell.az/api/allusers')
.then(res => res.json())
.then(res => {

    users.innerHTML = res.length
})

fetch('https://restwell.az/api/locations')
.then(res => res.json())
.then(res => {

    locations.innerHTML = res.length
})

