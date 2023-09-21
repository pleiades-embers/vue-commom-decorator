{
    "computed": {
        "pageTypeIsApprove": {},
        "userIsAdmin": {}
    },
    "components": {},
    "name": "ProjectList",
    "methods": {
        getOptions:()=>{}
    },
    "mixins": [
        {}
    ],
    "watch": {
        "searchOnline": [
            {
                "handler": "searchOnlineChange",
                "deep": false,
                "immediate": false
            }
        ],
        "citySelected": [
            {
                "handler": "citySelectedChange",
                "deep": true,
                "immediate": true
            }
        ],
        "$route": [
            {
                "handler": "routerChange",
                "deep": true,
                "immediate": false
            }
        ]
    }
}