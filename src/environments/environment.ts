// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  xperia:{
    0:{id:1,net:'Asp.Net', java:'Java Server Pages'},
    1:{id:2,net:'MVVM', java:'Java Server Faces'},
    2:{id:3,net:'Ado.Net', java:'Enterprise Java Beans'},
    3:{id:4,net:'Entity FrameWork', java:'Java Persistence Api'},
    4:{id:5,net:'LinQ', java:'Java Messaging Services'}
  },
  hora:[
   '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
     '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
