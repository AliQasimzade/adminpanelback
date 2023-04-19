const title = document.getElementById("title");
const category = document.getElementById('category');
const slogan = document.getElementById('slogan');
const locations = document.getElementById('locations');
const city = document.getElementById('city');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');
const descriptions = document.getElementById('descriptions');
const phone = document.getElementById('phone');
const email = document.getElementById('email')
const website = document.getElementById('website')
const facebook = document.getElementById('facebook')
const linkedin = document.getElementById('linkedin')
const youtube = document.getElementById('youtube');
const twitter = document.getElementById('twitter')
const whatsapp = document.getElementById('whatsapp')
const previousprice = document.getElementById('previousprice');
const price = document.getElementById('price');
let allTags;
const uploadlink = document.getElementById('uploadlink');
const uploadImg = document.getElementById('upload-img');
const profileimage = document.getElementById('profileimage')
const coverimage = document.getElementById('coverimage');

let allFeatures;
const startSunday = document.getElementById('sunday');
const endSunday = document.getElementById('sundays');
const typeValue = document.getElementById('type')
const startFriday = document.getElementById('friday');
const endFriday = document.getElementById('fridays');
const startSaturday = document.getElementById('saturday');
const endSaturday = document.getElementById('saturdays');
const startTuesday = document.getElementById('tuesday');
const endTuesday = document.getElementById('tuesdays');
const startThursday = document.getElementById('thursday');
const endThursday = document.getElementById('thursdays');
const startMonday = document.getElementById('monday');
const endMonday = document.getElementById('mondays');
const startWednesday = document.getElementById('wednesday');
const endWednesday = document.getElementById('wednesdays');
const submitBtn = document.getElementById('submitBtn');
const alltags = document.getElementById('alltags')
const properties = document.getElementById('properties');


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

let map;
let marker;
let long;
let lat;
let mapType = "google";

function initMap(latitude, longitude) {
    lat= latitude;
    long = longitude;
    console.log(lat, long)
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },

        zoom: 17,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        restriction: {
            latLngBounds: {
                north: 41.9946,
                south: 38.3895,
                west: 44.7749,
                east: 50.3924
            },
            strictBounds: true
        }
    });

    // Create a custom "My location" button that looks like the default Google Maps button
    const myLocationButton = document.createElement("button");
    myLocationButton.style.backgroundColor = "#fff";
    myLocationButton.style.border = "none";
    myLocationButton.style.outline = "none";
    myLocationButton.style.width = "28px";
    myLocationButton.style.height = "28px";
    myLocationButton.style.borderRadius = "2px";
    myLocationButton.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
    myLocationButton.style.cursor = "pointer";
    myLocationButton.style.marginRight = "10px";
    myLocationButton.style.padding = "0";
    myLocationButton.title = "My location";
    myLocationButton.innerHTML =
        '<img src="https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png" style="pointer-events:none">';
    myLocationButton.addEventListener("click", showMyLocation);
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
        myLocationButton
    );

    marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
    });

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
        { location: { lat: latitude, lng: longitude } },
        (results, status) => {
            if (status === "OK") {
                console.log(results[0]);
                city.innerHTML = results[0].address_components.filter(
                    (c) =>
                        c.types.includes("administrative_area_level_1") ||
                        c.types.includes("locality")
                )[0].long_name;
                const findRaion = results[0].address_components.map(re => re)
                    const findType = findRaion.map(f => {
                        if(f.types.some(r => r == "sublocality")) {
                            return f.short_name
                        }
                    }).filter(Boolean)
                    console.log(findType);
                address.innerHTML = results[0].formatted_address.split(',')[0] + "," + findType[0] + "," + results[0].formatted_address.split(',')[1] + "," + results[0].formatted_address.split(',')[2];
             
              
                locations.innerHTML = results[0].formatted_address.split(',')[0];
                marker.addListener("click", () => {
                    infowindow.setContent(null)
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                });
                var infowindow = new google.maps.InfoWindow({
                    content: results[0].formatted_address,
                });
                infowindow.open(map, marker);
            } else {
                console.log(
                    "Geocode was not successful for the following reason: " + status
                );
            }
        }
    );

    map.addListener("click", function (e) {
        marker.setPosition(e.latLng);
        const latitude = e.latLng.lat();
        const longitude = e.latLng.lng();
        long = longitude;
        lat = latitude;
        console.log(lat, long);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode(
            { location: { lat: latitude, lng: longitude } },
            (results, status) => {
                if (status === "OK") {
                    console.log(results[0]);
                    city.innerHTML = results[0].address_components.filter(
                        (c) =>
                            c.types.includes("administrative_area_level_1") ||
                            c.types.includes("locality")
                    )[0].long_name;
                    const findRaion = results[0].address_components.map(re => re)
                    const findType = findRaion.map(f => {
                        if(f.types.some(r => r == "sublocality")) {
                            return f.short_name
                        }
                    }).filter(Boolean)
                    console.log(findType);
                    address.innerHTML = results[0].formatted_address.split(',')[0] + "," + findType[0] + "," + results[0].formatted_address.split(',')[1] ;
                    locations.innerHTML =
                        results[0].formatted_address.split(",")[0];
                    marker.addListener("click", () => {
                        infowindow.setContent(results[0].formatted_address);
                        infowindow.open(map, marker);
                    });
                    var infowindow = new google.maps.InfoWindow({
                        content: results[0].formatted_address,
                    });
                    infowindow.open(map, marker);
                } else {
                    console.log(
                        "Geocode was not successful for the following reason: " +
                        status
                    );
                }
            }
        );
    });

    // Add autocomplete functionality to the search input field
    const searchInput = document.getElementById("search-input");
    const autocomplete = new google.maps.places.Autocomplete(searchInput);
    autocomplete.setFields(["geometry"]);

    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        const location = place.geometry.location;
        console.log(location);
        if (marker) {
            marker.setPosition(location);
            const latitude = location.lat();
            const longitude = location.lng();
            long = longitude;
            lat = latitude;
            console.log(lat, long);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode(
                { location: { lat: latitude, lng: longitude } },
                (results, status) => {
                    if (status === "OK") {
                        console.log(results[0]);
                        city.innerHTML = results[0].address_components.filter(
                            (c) =>
                                c.types.includes("administrative_area_level_1") ||
                                c.types.includes("locality")
                        )[0].long_name;

                        const findRaion = results[0].address_components.map(re => re)
                        const findType = findRaion.map(f => {
                            if(f.types.some(r => r == "sublocality")) {
                                return f.short_name
                            }
                        }).filter(Boolean)
                        console.log(findType);
                    address.innerHTML = results[0].formatted_address.split(',')[0] + "," + findType[0] + "," + results[0].formatted_address.split(',')[1] + "," + results[0].formatted_address.split(',')[2];
    
                        locations.innerHTML =
                            results[0].formatted_address.split(",")[0];
                        marker.addListener("click", () => {
                            infowindow.setContent(results[0].formatted_address);
                            infowindow.open(map, marker);
                        });
                        var infowindow = new google.maps.InfoWindow({
                            content: results[0].formatted_address,
                        });
                        infowindow.open(map, marker);
                    } else {
                        console.log(
                            "Geocode was not successful for the following reason: " +
                            status
                        );
                    }
                }
            );
        } else {
            
        }
        map.setCenter(location);
        map.setZoom(17);
    });

    function showMyLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                if (marker) {
                    marker.setPosition(location);
                } else {
                   
                }
                map.setCenter(location);
                map.setZoom(17);
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode(
                    { location: { lat: location.lat, lng: location.lng } },
                    (results, status) => {
                        if (status === "OK") {
                            console.log(results[0]);
                            city.innerHTML = results[0].address_components.filter(
                                (c) =>
                                    c.types.includes("administrative_area_level_1") ||
                                    c.types.includes("locality")
                            )[0].long_name;
                            const findRaion = results[0].address_components.map(re => re)
                            const findType = findRaion.map(f => {
                                if(f.types.some(r => r == "sublocality")) {
                                    return f.short_name
                                }
                            }).filter(Boolean)
                            console.log(findType);
                        address.innerHTML = results[0].formatted_address.split(',')[0] + "," + findType[0] + "," + results[0].formatted_address.split(',')[1] + "," + results[0].formatted_address.split(',')[2];
        
                            locations.innerHTML =
                                results[0].formatted_address.split(",")[0];
                            marker.addListener("click", () => {
                                infowindow.setContent(results[0].formatted_address);
                                infowindow.open(map, marker);
                            });
                            var infowindow = new google.maps.InfoWindow({
                                content: results[0].formatted_address,
                            });
                            infowindow.open(map, marker);
                        } else {
                            console.log(
                                "Geocode was not successful for the following reason: " +
                                status
                            );
                        }
                    }
                );
            });
        }
    }
}

function loadMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords);
            const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            initMap(location.lat, location.lng);
        });
    } else {
        // Default location
        initMap(37.7749, -122.4194);
    }
}

window.onload = loadMap;

const getAllCatAndTags = async () => {
    try {
        const urls = ['https://restwell.az/api/categories', 'https://restwell.az/api/tags', 'https://restwell.az/api/properties'];
        const requests = urls.map(url => fetch(url));
        const responses = await Promise.all(requests);

        const data = await Promise.all(responses.map(response => response.json()));

        data[0].forEach(cat => category.innerHTML +=
            `
        <option value="${cat.name}">${cat.name}</option>
        `)

        data[1].forEach(tag => alltags.innerHTML +=
            `
            <div class="mb-5 flex items-center">
            <input
              type="checkbox"
              id="${tag.name}"
              class="check_tag checkbox-checked peer appearance-none h-4 w-4 border-[2px] border-gray-500 dark:border-gray-400 rounded-[5px] bg-white dark:bg-foreground bg-cover bg-center checked:border-0 focus:outline-none mr-3 cursor-pointer"
            />
            <label
            for="${tag.name}"
              class="text-sm flex text-gray-700 dark:text-gray-400 peer-checked:text-blue-500 dark:peer-checked:text-blue-500"
            >
          <span>${tag.name}</span>
            </label>
          </div>
            `)

        data[2].forEach(feature => properties.innerHTML +=
            `
            <div class="mb-5 flex items-center">
            <input
            id="${feature.name}"
            type="checkbox"
              class="check_feature checkbox-checked peer appearance-none h-4 w-4 border-[2px] border-gray-500 dark:border-gray-400 rounded-[5px] bg-white dark:bg-foreground bg-cover bg-center checked:border-0 focus:outline-none mr-3 cursor-pointer"
            />
            <label
            for="${feature.name}"
              class="text-sm flex text-gray-700 dark:text-gray-400 peer-checked:text-blue-500 dark:peer-checked:text-blue-500"
            >
            
            <span> ${feature.name}</span>
            </label>
          </div>
            `)
        allTags = document.querySelectorAll('.check_tag')
        allFeatures = document.querySelectorAll('.check_feature')
    } catch (error) {
        console.log(error.message);
    }

}
getAllCatAndTags()

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


let imageUrls = [];
let profileImageUrl = '';
let coverImageUrl = '';
uploadImg.addEventListener('change', (e) => {
    const files = event.target.files;
    const uploadTasks = Array.from(files).map((file) => {
        let storageRef = storage.ref();
        let imagesRef = storageRef.child('images/' + file.name);
        return imagesRef.put(file)
            .then((snapshot) => {
                return snapshot.ref.getDownloadURL();
            });
    });

    Promise.all(uploadTasks)
        .then((downloadUrls) => {

            imageUrls = [...downloadUrls]
            console.log(imageUrls);
            // Handle successful upload and download
        })
        .catch((error) => {
            console.error('Upload failed', error);
            // Handle upload error
        });
})

profileimage.addEventListener('change', (e) => {
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
                profileImageUrl = downloadURL
            });
        }
    );
})


coverimage.addEventListener('change', (e) => {
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
                coverImageUrl = downloadURL
            });
        }
    );
})


submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const tags = [...allTags].map(tag => {
            if (tag.checked) {
                return tag.nextElementSibling.children[0].innerHTML
            }
        }).filter(Boolean)

        const features = [...allFeatures].map(tag => {
            if (tag.checked) {
                return tag.nextElementSibling.children[0].innerHTML
            }
        }).filter(Boolean)
        console.log(tags, features)
        if (tags.length == 0 ||
            features.length == 0 ||
            imageUrls.length == 0 ||
            title.value == '' ||
            address.innerHTML == '' ||
            website.value == '' ||
            whatsapp.value == '' ||
            linkedin.value == '' ||
            facebook.value == '' ||
            previousprice.value == '' ||
            price.value == '' ||
            typeValue.value == '' ||
            city.innerHTML == '' ||
            phone.value == '' ||
            twitter.value == '' ||
            email.value == '' ||
            uploadlink.value == '' ||
            descriptions.value == '' ||
            profileImageUrl == '' ||
            coverImageUrl == '' ||
            category.value == '' ||
            locations.innerHTML == '' ||
            slogan.value == '' ||
            startMonday.value == '' ||
            endMonday.value == '' ||
            startTuesday.value == '' ||
            endTuesday.value == '' ||
            startWednesday.value == '' ||
            endWednesday.value == '' ||
            startThursday.value == '' ||
            endThursday.value == '' ||
            startFriday.value == '' ||
            endFriday.value == '' ||
            startSaturday.value == '' ||
            endSaturday.value == '' ||
            startSunday.value == '' ||
            endSunday.value == ''
        ) {
            alert("Please fill inputs or input !")
        } else {


            const newListing = {
                listingTitle: title.value,
                address: address.innerHTML,
                website: website.value,
                type: typeValue.value,
                twitter: twitter.value,
                linkedin: linkedin.value,
                facebook: facebook.value,
                previousprice: Number(previousprice.value),
                price: Number(price.value),
                whatsapp: whatsapp.value,
                phone: phone.value,
                cityorstate: city.innerHTML,
                email: email.value,
                gallery: imageUrls,
                uploadlink: uploadlink.value,
                zipcode: Number(zipcode.value),
                description: descriptions.value,
                category: category.value,
                profileImage: profileImageUrl,
                splashscreen: coverImageUrl,
                slogan: slogan.value,
                roadorstate: locations.innerHTML,
                locationCoords: {
                    latitude: lat,
                    longtitude: long
                },
                timeschedule: [
                    {
                        closingtime: startFriday.value,
                        openingTime: endFriday.value
                    },
                    {
                        closingtime: startMonday.value,
                        openingTime: endMonday.value
                    },
                    {
                        closingtime: startSaturday.value,
                        openingTime: endSaturday.value
                    },
                    {
                        closingtime: startThursday.value,
                        openingTime: endThursday.value
                    },
                    {
                        closingtime: startTuesday.value,
                        openingTime: endTuesday.value
                    },
                    {
                        closingtime: startWednesday.value,
                        openingTime: endWednesday.value
                    },
                    {
                        closingtime: startSunday.value,
                        openingTime: endSunday.value
                    }
                ],
                tags,
                features,
            }
console.log(newListing)
            const req = await fetch('https://restwell.az/api/addnewlisting', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newListing)
            })
            if (!req.ok) {
                throw new Error("Request is failed !")
            } else {
                const res = await req.json()
                alert("Create new listing successfully !")
                location.reload()
            }
        }
    } catch (err) {
        console.log(err.message);
    }
})

