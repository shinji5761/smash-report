// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false
  // api
  , api : {
    host : 'http://localhost:3000'
  }

  // firebase
  , firebaseConfig : {
      apiKey: "AIzaSyAODzkg3cQqpGadqiJSciZXUMu6it2HjAI",
      authDomain: "sumash-report.firebaseapp.com",
      databaseURL: "https://sumash-report.firebaseio.com",
      projectId: "sumash-report",
      storageBucket: "sumash-report.appspot.com",
      messagingSenderId: "1017742717854",
      appId: "1:1017742717854:web:a2c0bef507fbb6e40e9c8f",
      measurementId: "G-M2WXG66YT4"
  }
  // twitter
  , twitterConfig : {
      apiKey : 'dVa2FwG6r809A0ROjlZSmmLAs'
    , secretKey : 'PfCkYOlJpRY1isXvtrdyc9fc7SiTAElkHl2xkFgumFAdLGT3I4'
    , token : 'AAAAAAAAAAAAAAAAAAAAAJ0TKwEAAAAAclKnltQS3vUb2MBQ%2BRLpSYVyuSs%3DTxa5YLMRYXHbidn1VtVXHjarmrLwndZdFPcY9jAW6Y5Hg7Gdnn'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
