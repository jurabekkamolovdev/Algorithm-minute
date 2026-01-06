// async function getUserId(id) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(id);
//         }, 2000);
//     });
// }

// for(let i = 0; i < 10; i++) {
//     getUserId(i+1)
//         .then(id => {
//             console.log(id)
//         });
// }

// async function getUserId(id) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(id);
//         }, 2000);
//     });
// }

// async function getAll() {
//     for(let i = 0; i < 10; i++) {
//         const id = await getUserId(i+1); // await - kutadi
//         console.log(id);
//     }
// }

// getAll();


async function getUserId(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(id);
        }, 2000);
    });
}

async function getAllParallel() {
    const promises = [];
    
    for(let i = 0; i < 10; i++) {
        promises.push(getUserId(i+1));
    }
    
    const results = await Promise.all(promises);
    console.log(results); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

getAllParallel();