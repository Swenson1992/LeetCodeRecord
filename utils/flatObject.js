const oldObject = {
    "A": 1,
    "B.A": 2,
    "B.B": 4,
    "CC.D.E": 3,
    "CC.D.F": 5,
};

const flatDict = obj => {
    let setValue = (o, k, v) => {
        if (k.length == 1) {
            o[k[0]] = v;
        } else {
            [key, ...rest] = k;
            if (!o[key]) {
                o[key] = {}
            }
            setValue(o[key], [...rest], v);
        }
    }
    let dict = {};
    Object.keys(obj).forEach(key => {
        let splits = key.split('.');
        setValue(dict, splits, obj[key]);
    })
    return dict
}

console.log(JSON.stringify(flatDict(oldObject), null, 4))

const newOject = {
    "A": 1,
    "B": {
        "A": 2,
        "B": 4
    },
    "CC": {
        "D": {
            "E": 3,
            "F": 5
        }
    }
}
