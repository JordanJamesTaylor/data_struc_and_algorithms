const profile = {
    name: 'Jordan'
}

/*
    Dot notation
    Requires the keyname to be passed

*/
profile.age = 81; 

/*
    Bracket notation
    Can take in a dynamic key name
*/
profile['age'] = 18;


// FOR IN LOOP
for (const key in profile){
    console.log(profile.key)
} // Does not work, dot notation thinks theres a key called key

for (const key in profile){
    console.log(profile[key])
} // Can take in key as the key name, or as a dynamic value

