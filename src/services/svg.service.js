const svgs = {
  'like-full': `<svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="m480-173.846-30.308-27.385q-97.923-89.461-162-153.153-64.077-63.693-101.154-112.347-37.077-48.654-51.807-88.038Q120-594.154 120-634q0-76.308 51.846-128.154Q223.692-814 300-814q52.769 0 99 27t81 78.538Q514.769-760 561-787t99-27q76.308 0 128.154 51.846Q840-710.308 840-634q0 39.846-14.731 79.231-14.73 39.384-51.807 88.038-37.077 48.654-100.769 112.347Q609-290.692 510.308-201.231L480-173.846Z"/></svg>`,

  like: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-173.846-30.308-27.385q-97.923-89.461-162-153.153-64.077-63.693-101.154-112.347-37.077-48.654-51.807-88.038Q120-594.154 120-634q0-76.308 51.846-128.154Q223.692-814 300-814q52.769 0 99 27t81 78.538Q514.769-760 561-787t99-27q76.308 0 128.154 51.846Q840-710.308 840-634q0 39.846-14.731 79.231-14.73 39.384-51.807 88.038-37.077 48.654-100.769 112.347Q609-290.692 510.308-201.231L480-173.846ZM480-228q96-86.769 158-148.654 62-61.884 98-107.384t50-80.616q14-35.115 14-69.346 0-60-40-100t-100-40q-47.769 0-88.154 27.269-40.384 27.269-72.307 82.116h-39.078q-32.692-55.616-72.692-82.5Q347.769-774 300-774q-59.231 0-99.615 40Q160-694 160-634q0 34.231 14 69.346 14 35.116 50 80.616t98 107q62 61.5 158 149.038Zm0-273Z"/></svg>`,

  star: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm-61 83.924 49.615-212.539-164.923-142.847 217.231-18.846L480-737.693l85.077 200.385 217.231 18.846-164.923 142.847L667-163.076 480-275.923 293-163.076ZM480-430Z"/></svg>`,

  'star-full': `<svg class="star-full" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m293-163.076 49.615-212.539-164.923-142.847 217.231-18.846L480-737.693l85.077 200.385 217.231 18.846-164.923 142.847L667-163.076 480-275.923 293-163.076Z"/></svg>`,

  loc: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480.136-490.769q26.71 0 45.595-19.021 18.884-19.021 18.884-45.731t-19.02-45.594Q506.574-620 479.864-620t-45.595 19.021q-18.884 19.02-18.884 45.731 0 26.71 19.02 45.594 19.021 18.885 45.731 18.885ZM480-172.923q112.769-98.154 178.308-199.654 65.538-101.5 65.538-175.577 0-109.769-69.5-181.192T480-800.769q-104.846 0-174.346 71.423t-69.5 181.192q0 74.077 65.538 175.577Q367.231-271.077 480-172.923Zm0 53.692Q339-243.923 267.577-351.808q-71.423-107.884-71.423-196.346 0-126.923 82.654-209.385Q361.461-840 480-840t201.192 82.461q82.654 82.462 82.654 209.385 0 88.462-71.423 196.346Q621-243.923 480-119.231Zm0-436.154Z"/></svg>`,

  beach: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M774-156.923 532.308-397.077l28.308-28.308 241.692 241.693L774-156.923Zm-535.231-49.538q-40.769-50-60.538-108.846-19.77-58.847-19.77-119.924 0-71.077 26.308-137.769 26.308-66.692 80.154-119.769 53.846-53.847 120.654-80.27 66.808-26.423 136.346-26.423 61.846 0 120.193 19.885 58.346 19.885 109.115 60.654L238.769-206.461Zm4.923-62.001 72.462-72.461q-16-22.538-31.654-47.615t-27.654-53.231q-12-28.154-19.077-59.769-7.077-31.616-7.923-65.692-36.384 72.846-30.731 151.461 5.654 78.615 44.577 147.307Zm102.77-100.769 241.999-244q-43-33-87.653-51.961-44.654-18.962-84.577-25.308-39.923-6.346-72.346.192-32.423 6.539-50.193 24.308-17.769 18-24.307 50.423-6.539 32.423-.577 72.462 5.961 40.038 24.923 84.961 18.961 44.923 52.731 88.923Zm271.846-272.308L691.231-714q-69.923-41.231-148.923-45.846-79-4.616-151.846 30.461 35.077.077 66.692 7.923 31.615 7.847 59.769 19.731 28.154 11.885 53.5 27.539 25.346 15.653 47.885 32.653Z"/></svg>`,

  sign: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M460-120v-160H260L160-380l100-100h200v-80H200v-200h260v-80h40v80h200l100 100-100 100H500v80h260v200H500v160h-40ZM240-600h443.923l60-60-60-60H240v120Zm36.077 280H720v-120H276.077l-60 60 60 60ZM240-600v-120 120Zm480 280v-120 120Z"/></svg>',

  sailing: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M158.461-440 420-816.154V-440H158.461Zm76.078-40H380v-208.846L234.539-480Zm293.153 40q10.462-29.538 21.385-93Q560-596.461 560-660q0-69.692-10.808-132.231-10.808-62.538-20.731-99.308 57.154 27.231 108.039 73.154 50.885 45.923 89.769 105.077 38.885 59.154 63.616 128.731T819.231-440H527.692Zm52.462-40h194.154q-14.693-98.538-64.731-183.692-50.039-85.154-122.269-143.231 5.846 35.616 9.269 73.885Q600-694.769 600-660q0 45.462-5.654 91.615-5.654 46.154-14.192 88.385ZM360-195.385q-31.385 0-62.385-11.615-31-11.615-57.615-37.615-9.385 9.615-20.885 19.153-11.5 9.539-23.038 14.462-31.923-24.462-54.5-57.577Q119-301.692 106.154-340h747.692Q841-301.692 818.423-268.577T763.923-211q-11.538-4.923-23.038-14.462Q729.385-235 720-244.615q-26.846 26-57.731 37.615-30.884 11.615-62.269 11.615-31.385 0-62.769-11.615-31.385-11.615-57.231-38.385-25.846 26.77-57.231 38.385-31.384 11.615-62.769 11.615ZM100-60v-40h20q32 0 62.115-10 30.116-10 57.885-27.692 28.538 17.692 58.269 27.576Q328-100.231 360-100.231t61.615-9.885Q451.231-120 480-137.692q28.538 17.692 58.269 27.576Q568-100.231 600-100.231t62-9.885q30-9.884 58-27.576Q748.769-120 778.385-110 808-100 840-100h20v40h-20q-28.692 0-58.692-7.885-30-7.884-61.308-24.423-31.308 16.539-61.308 24.424Q628.692-60 600-60t-58.692-7.885q-30-7.884-61.308-24.423-31.308 16.539-61.308 24.424Q388.692-60 360-60t-58.692-7.885q-30-7.884-61.308-24.423-31.308 16.539-61.308 24.424Q148.692-60 120-60h-20Zm280-420Zm200.154 0Z"/></svg>`,

  forest: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-120v-160H75.384L234-520h-77.077L360-810.77l120 172 120-172L803.077-520H726l158.616 240H640v160h-80v-160H400v160h-80Zm298.231-200h192.692L652.077-560H726L600-740l-94.846 135.615L563.077-520H486l132.231 200Zm-469.154 0h421.846L412.077-560H486L360-740 234-560h73.923L149.077-320Zm0 0h158.846H234h252-73.923 158.846-421.846Zm469.154 0H486h77.077-57.923H726h-73.923 158.846-192.692ZM560-280h80-80Zm84.847 0Z"/></svg>`,

  menu: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`,

  hiking: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m280-40 123-622q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-71h60v560h-60v-406q-48-11-89-35t-71-59l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm17-395-85-16q-16-3-25-16.5t-6-30.5l30-157q6-32 34-50.5t60-12.5l46 9-54 274Zm243-305q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>`,

  camping: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-100v-153.692l335.384-451.231L410-765.077l32.461-24.154L480-738.077l38.308-51.154L550-765.077l-44.615 60.154L840-253.692V-100H120Zm360-571L160-240.769V-140h130l190-265.385L670-140h130v-100.769L480-671ZM339.539-140h280.922L480-336.615 339.539-140ZM480-405.385 670-140 480-405.385 290-140l190-265.385Z"/></svg>`,

  remove: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M304.615-160q-26.846 0-45.731-18.884Q240-197.769 240-224.615V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.385Q720-197 701.5-178.5 683-160 655.385-160h-350.77ZM680-720H280v495.385q0 10.769 6.923 17.692T304.615-200h350.77q9.23 0 16.923-7.692Q680-215.385 680-224.615V-720ZM392.307-280h40.001v-360h-40.001v360Zm135.385 0h40.001v-360h-40.001v360ZM280-720v520-520Z"/></svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z"/></svg>`
}

export const svgService = {
  getSvg: (name) => svgs[name]
}
