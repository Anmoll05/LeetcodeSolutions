/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    // joe = [[home,1],[about,2],[career,3]]
    // james = [[home,4], [cart,5],[maps,6], [home,7]]
    // marry = [[home,8], [about,9], [career, 10]]
    let patternCounter = {};
    let perPerson = {};
    for (let i = 0; i < username.length; i++) {
        const name = username[i];
        if(!(perPerson[name])) {
            perPerson[name] = [];
        }
        perPerson[name].push([website[i], timestamp[i]]);
    }
    for (let k in perPerson) {
        perPerson[k] = perPerson[k].sort((a,b) => a[1] - b[1]);
    }
    let patternPerPerson = {}
    for (let person in perPerson) {
        for (let i = 0; i < perPerson[person].length; i++) {
            for (let j = i + 1; j < perPerson[person].length; j++) {
                for (let k = j + 1; k < perPerson[person].length; k++) {
                    const firstWebsite = perPerson[person][i][0];
                    const secondWebsite = perPerson[person][j][0];
                    const thirdWebsite = perPerson[person][k][0];
                    const key = firstWebsite + "|" + secondWebsite + "|" + thirdWebsite;
                    if (!(patternPerPerson[person])) patternPerPerson[person] = {};
                    patternPerPerson[person][key] = true;
                }
            }
        }
    }
    for (let person in patternPerPerson) {
        //console.log('person', person)
        for (let pattern in patternPerPerson[person]) {
             // console.log('pattern', pattern)
            patternCounter[pattern] = ++patternCounter[pattern] || 1;
        }
    }

    const maxOcc = Math.max(...Object.values(patternCounter));
    const patternsWithMaxOcc = [];
    for (let k in patternCounter) {
        if(patternCounter[k] == maxOcc) {
            patternsWithMaxOcc.push(k.split("|"))
        }
    }
    //console.log(patternsWithMaxOcc)
    return patternsWithMaxOcc.sort()[0];
};