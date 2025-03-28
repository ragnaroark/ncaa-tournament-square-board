document.addEventListener('DOMContentLoaded', function() {
    // NCAA Tournament games data with rounds
    const ncaaGames = [
        // First round games (Round of 64) - Thursday
        {
            id: 1,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Creighton",
                seed: 9,
                score: 89,
                logo: "https://placehold.co/30x30/blue/white?text=CRE"
            },
            loser: {
                name: "Louisville",
                seed: 8,
                score: 75,
                logo: "https://placehold.co/30x30/red/white?text=LOU"
            },
            video: "10:46"
        },
        {
            id: 2,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Purdue",
                seed: 4,
                score: 75,
                logo: "https://placehold.co/30x30/gold/black?text=PUR"
            },
            loser: {
                name: "High Point",
                seed: 13,
                score: 63,
                logo: "https://placehold.co/30x30/purple/white?text=HP"
            },
            video: "9:38"
        },
        {
            id: 3,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Wisconsin",
                seed: 3,
                score: 85,
                logo: "https://placehold.co/30x30/red/white?text=WIS"
            },
            loser: {
                name: "Montana",
                seed: 14,
                score: 66,
                logo: "https://placehold.co/30x30/maroon/white?text=MON"
            },
            video: "10:32"
        },
        {
            id: 4,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Houston",
                seed: 1,
                score: 78,
                logo: "https://placehold.co/30x30/red/white?text=HOU"
            },
            loser: {
                name: "SIUE",
                seed: 16,
                score: 40,
                logo: "https://placehold.co/30x30/red/white?text=SIUE"
            },
            video: "8:46"
        },
        {
            id: 5,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Auburn",
                seed: 1,
                score: 83,
                logo: "https://placehold.co/30x30/blue/white?text=AUB"
            },
            loser: {
                name: "Alabama State",
                seed: 16,
                score: 63,
                logo: "https://placehold.co/30x30/gold/black?text=ALA"
            },
            video: "10:30"
        },
        {
            id: 6,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "McNeese State",
                seed: 12,
                score: 69,
                logo: "https://placehold.co/30x30/blue/white?text=MCN"
            },
            loser: {
                name: "Clemson",
                seed: 5,
                score: 67,
                logo: "https://placehold.co/30x30/orange/white?text=CLEM"
            },
            video: "8:38"
        },
        {
            id: 7,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "BYU",
                seed: 6,
                score: 80,
                logo: "https://placehold.co/30x30/blue/white?text=BYU"
            },
            loser: {
                name: "VCU",
                seed: 11,
                score: 71,
                logo: "https://placehold.co/30x30/gold/black?text=VCU"
            },
            video: "10:03"
        },
        {
            id: 8,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Gonzaga",
                seed: 8,
                score: 89,
                logo: "https://placehold.co/30x30/blue/white?text=GON"
            },
            loser: {
                name: "Georgia",
                seed: 9,
                score: 68,
                logo: "https://placehold.co/30x30/red/white?text=GEO"
            },
            video: "9:33"
        },
        {
            id: 9,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Tennessee",
                seed: 2,
                score: 77,
                logo: "https://placehold.co/30x30/orange/white?text=TEN"
            },
            loser: {
                name: "Wofford",
                seed: 15,
                score: 62,
                logo: "https://placehold.co/30x30/black/white?text=WOF"
            },
            video: "8:44"
        },
        {
            id: 10,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Arkansas",
                seed: 10,
                score: 79,
                logo: "https://placehold.co/30x30/red/white?text=ARK"
            },
            loser: {
                name: "Kansas",
                seed: 7,
                score: 72,
                logo: "https://placehold.co/30x30/blue/white?text=KAN"
            },
            video: "10:09"
        },
        {
            id: 11,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Texas A&M",
                seed: 4,
                score: 80,
                logo: "https://placehold.co/30x30/maroon/white?text=A&M"
            },
            loser: {
                name: "Yale",
                seed: 13,
                score: 71,
                logo: "https://placehold.co/30x30/blue/white?text=YALE"
            },
            video: "10:37"
        },
        {
            id: 12,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Drake",
                seed: 11,
                score: 67,
                logo: "https://placehold.co/30x30/blue/white?text=DRA"
            },
            loser: {
                name: "Missouri",
                seed: 6,
                score: 57,
                logo: "https://placehold.co/30x30/gold/black?text=MIZ"
            },
            video: "7:12"
        },
        {
            id: 13,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "UCLA",
                seed: 7,
                score: 72,
                logo: "https://placehold.co/30x30/blue/gold?text=UCLA"
            },
            loser: {
                name: "Utah State",
                seed: 10,
                score: 47,
                logo: "https://placehold.co/30x30/blue/white?text=USU"
            },
            video: "10:01"
        },
        {
            id: 14,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "St John's",
                seed: 2,
                score: 83,
                logo: "https://placehold.co/30x30/red/white?text=STJ"
            },
            loser: {
                name: "Omaha",
                seed: 15,
                score: 53,
                logo: "https://placehold.co/30x30/red/white?text=OMA"
            },
            video: "8:30"
        },
        {
            id: 15,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Michigan",
                seed: 5,
                score: 68,
                logo: "https://placehold.co/30x30/blue/gold?text=MICH"
            },
            loser: {
                name: "UC San Diego",
                seed: 12,
                score: 65,
                logo: "https://placehold.co/30x30/gold/blue?text=UCSD"
            },
            video: "9:45"
        },
        {
            id: 16,
            round: 1,
            name: "Round of 64",
            date: "Thu, Mar 20",
            day: "thursday",
            winner: { 
                name: "Texas Tech",
                seed: 3,
                score: 82,
                logo: "https://placehold.co/30x30/red/black?text=TTU"
            },
            loser: {
                name: "UNCW",
                seed: 14,
                score: 72,
                logo: "https://placehold.co/30x30/teal/white?text=UNCW"
            },
            video: "9:26"
        },
        
        // Friday games (Round of 64)
        {
            id: 17,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Baylor",
                seed: 9,
                score: 75,
                logo: "https://placehold.co/30x30/green/gold?text=BAY"
            },
            loser: {
                name: "MS State",
                seed: 8,
                score: 72,
                logo: "https://placehold.co/30x30/maroon/white?text=MSS"
            },
            video: "10:49"
        },
        {
            id: 18,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Alabama",
                seed: 2,
                score: 90,
                logo: "https://placehold.co/30x30/crimson/white?text=ALA"
            },
            loser: {
                name: "Robert Morris",
                seed: 15,
                score: 81,
                logo: "https://placehold.co/30x30/blue/white?text=RMU"
            },
            video: "11:44"
        },
        {
            id: 19,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Iowa State",
                seed: 3,
                score: 82,
                logo: "https://placehold.co/30x30/red/gold?text=ISU"
            },
            loser: {
                name: "Lipscomb",
                seed: 14,
                score: 55,
                logo: "https://placehold.co/30x30/purple/gold?text=LIP"
            },
            video: "10:46"
        },
        {
            id: 20,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "CO State",
                seed: 12,
                score: 78,
                logo: "https://placehold.co/30x30/green/gold?text=CSU"
            },
            loser: {
                name: "Memphis",
                seed: 5,
                score: 70,
                logo: "https://placehold.co/30x30/blue/white?text=MEM"
            },
            video: "9:20"
        },
        {
            id: 21,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Duke",
                seed: 1,
                score: 93,
                logo: "https://placehold.co/30x30/blue/white?text=DUKE"
            },
            loser: {
                name: "Mt St Mary's",
                seed: 16,
                score: 49,
                logo: "https://placehold.co/30x30/blue/white?text=MSM"
            },
            video: "11:19"
        },
        {
            id: 22,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "St Mary's CA",
                seed: 7,
                score: 59,
                logo: "https://placehold.co/30x30/red/white?text=SMC"
            },
            loser: {
                name: "Vanderbilt",
                seed: 10,
                score: 56,
                logo: "https://placehold.co/30x30/gold/black?text=VAN"
            },
            video: "8:04"
        },
        {
            id: 23,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Ole Miss",
                seed: 6,
                score: 71,
                logo: "https://placehold.co/30x30/red/blue?text=MISS"
            },
            loser: {
                name: "UNC",
                seed: 11,
                score: 64,
                logo: "https://placehold.co/30x30/blue/white?text=UNC"
            },
            video: "10:42"
        },
        {
            id: 24,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Maryland",
                seed: 4,
                score: 81,
                logo: "https://placehold.co/30x30/red/white?text=UMD"
            },
            loser: {
                name: "Grand Canyon",
                seed: 13,
                score: 49,
                logo: "https://placehold.co/30x30/purple/white?text=GCU"
            },
            video: "9:50"
        },
        {
            id: 25,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Florida",
                seed: 1,
                score: 95,
                logo: "https://placehold.co/30x30/blue/orange?text=FLA"
            },
            loser: {
                name: "Norfolk State",
                seed: 16,
                score: 69,
                logo: "https://placehold.co/30x30/green/gold?text=NSU"
            },
            video: "10:25"
        },
        {
            id: 26,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Kentucky",
                seed: 3,
                score: 76,
                logo: "https://placehold.co/30x30/blue/white?text=UK"
            },
            loser: {
                name: "Troy",
                seed: 14,
                score: 57,
                logo: "https://placehold.co/30x30/red/white?text=TROY"
            },
            video: "10:01"
        },
        {
            id: 27,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "New Mexico",
                seed: 10,
                score: 75,
                logo: "https://placehold.co/30x30/red/white?text=UNM"
            },
            loser: {
                name: "Marquette",
                seed: 7,
                score: 66,
                logo: "https://placehold.co/30x30/blue/gold?text=MARQ"
            },
            video: "9:02"
        },
        {
            id: 28,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Arizona",
                seed: 4,
                score: 93,
                logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
            },
            loser: {
                name: "Akron",
                seed: 13,
                score: 65,
                logo: "https://placehold.co/30x30/blue/white?text=AKR"
            },
            video: "11:16"
        },
        {
            id: 29,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "UConn",
                seed: 8,
                score: 67,
                logo: "https://placehold.co/30x30/blue/white?text=CONN"
            },
            loser: {
                name: "Oklahoma",
                seed: 9,
                score: 59,
                logo: "https://placehold.co/30x30/crimson/white?text=OKLA"
            },
            video: "8:07"
        },
        {
            id: 30,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Illinois",
                seed: 6,
                score: 86,
                logo: "https://placehold.co/30x30/orange/blue?text=ILL"
            },
            loser: {
                name: "Xavier",
                seed: 11,
                score: 73,
                logo: "https://placehold.co/30x30/blue/white?text=XAV"
            },
            video: "9:40"
        },
        {
            id: 31,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "MI State",
                seed: 2,
                score: 87,
                logo: "https://placehold.co/30x30/green/white?text=MSU"
            },
            loser: {
                name: "Bryant",
                seed: 15,
                score: 62,
                logo: "https://placehold.co/30x30/black/gold?text=BRY"
            },
            video: "11:15"
        },
        {
            id: 32,
            round: 1,
            name: "Round of 64",
            date: "Fri, Mar 21",
            day: "friday",
            winner: { 
                name: "Oregon",
                seed: 5,
                score: 81,
                logo: "https://placehold.co/30x30/green/yellow?text=ORE"
            },
            loser: {
                name: "Liberty",
                seed: 12,
                score: 52,
                logo: "https://placehold.co/30x30/red/blue?text=LIB"
            },
            video: "9:42"
        },
        
        // Second round games (Round of 32)
        {
            id: 33,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "Arkansas",
                seed: 10,
                score: 75,
                logo: "https://placehold.co/30x30/red/white?text=ARK"
            },
            loser: {
                name: "St John's",
                seed: 2,
                score: 66,
                logo: "https://placehold.co/30x30/red/white?text=STJ"
            },
            video: "8:32"
        },
        // Second round games (Round of 32) - Saturday March 22
        {
            id: 35,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "Purdue",
                seed: 4,
                score: 76,
                logo: "https://placehold.co/30x30/gold/black?text=PUR"
            },
            loser: {
                name: "McNeese State",
                seed: 12,
                score: 62,
                logo: "https://placehold.co/30x30/blue/white?text=MCN"
            },
            video: "8:29"
        },
        {
            id: 36,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "Michigan",
                seed: 5,
                score: 91,
                logo: "https://placehold.co/30x30/blue/gold?text=MICH"
            },
            loser: {
                name: "Texas A&M",
                seed: 4,
                score: 79,
                logo: "https://placehold.co/30x30/maroon/white?text=A&M"
            },
            video: "9:38"
        },
        {
            id: 37,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "Texas Tech",
                seed: 3,
                score: 77,
                logo: "https://placehold.co/30x30/red/black?text=TTU"
            },
            loser: {
                name: "Drake",
                seed: 11,
                score: 64,
                logo: "https://placehold.co/30x30/blue/white?text=DRA"
            },
            video: "9:26"
        },
        {
            id: 38,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "Auburn",
                seed: 1,
                score: 82,
                logo: "https://placehold.co/30x30/blue/white?text=AUB"
            },
            loser: {
                name: "Creighton",
                seed: 9,
                score: 70,
                logo: "https://placehold.co/30x30/blue/white?text=CRE"
            },
            video: "9:59"
        },
        {
            id: 39,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "BYU",
                seed: 6,
                score: 91,
                logo: "https://placehold.co/30x30/blue/white?text=BYU"
            },
            loser: {
                name: "Wisconsin",
                seed: 3,
                score: 89,
                logo: "https://placehold.co/30x30/red/white?text=WIS"
            },
            video: "11:25"
        },
        {
            id: 40,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "Houston",
                seed: 1,
                score: 81,
                logo: "https://placehold.co/30x30/red/white?text=HOU"
            },
            loser: {
                name: "Gonzaga",
                seed: 8,
                score: 76,
                logo: "https://placehold.co/30x30/blue/white?text=GON"
            },
            video: "10:05"
        },
        {
            id: 41,
            round: 2,
            name: "Round of 32",
            date: "Sat, Mar 22",
            day: "saturday",
            winner: { 
                name: "Tennessee",
                seed: 2,
                score: 67,
                logo: "https://placehold.co/30x30/orange/white?text=TEN"
            },
            loser: {
                name: "UCLA",
                seed: 7,
                score: 58,
                logo: "https://placehold.co/30x30/blue/gold?text=UCLA"
            },
            video: "8:19"
        },
        // Second round games (Round of 32) - Sunday March 23
        {
            id: 42,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "Duke",
                seed: 1,
                score: 89,
                logo: "https://placehold.co/30x30/blue/white?text=DUKE"
            },
            loser: {
                name: "Baylor",
                seed: 9,
                score: 66,
                logo: "https://placehold.co/30x30/green/gold?text=BAY"
            },
            video: "9:11"
        },
        {
            id: 43,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "Florida",
                seed: 1,
                score: 77,
                logo: "https://placehold.co/30x30/blue/orange?text=FLA"
            },
            loser: {
                name: "UConn",
                seed: 8,
                score: 75,
                logo: "https://placehold.co/30x30/blue/white?text=CONN"
            },
            video: "7:40"
        },
        {
            id: 44,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "Kentucky",
                seed: 3,
                score: 84,
                logo: "https://placehold.co/30x30/blue/white?text=UK"
            },
            loser: {
                name: "Illinois",
                seed: 6,
                score: 75,
                logo: "https://placehold.co/30x30/orange/blue?text=ILL"
            },
            video: "11:51"
        },
        {
            id: 45,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "Alabama",
                seed: 2,
                score: 80,
                logo: "https://placehold.co/30x30/crimson/white?text=ALA"
            },
            loser: {
                name: "St Mary's CA",
                seed: 7,
                score: 66,
                logo: "https://placehold.co/30x30/red/white?text=SMC"
            },
            video: "9:41"
        },
        {
            id: 46,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "Maryland",
                seed: 4,
                score: 72,
                logo: "https://placehold.co/30x30/red/white?text=UMD"
            },
            loser: {
                name: "CO State",
                seed: 12,
                score: 71,
                logo: "https://placehold.co/30x30/green/gold?text=CSU"
            },
            video: "9:55"
        },
        {
            id: 47,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "Ole Miss",
                seed: 6,
                score: 91,
                logo: "https://placehold.co/30x30/red/blue?text=MISS"
            },
            loser: {
                name: "Iowa State",
                seed: 3,
                score: 78,
                logo: "https://placehold.co/30x30/red/gold?text=ISU"
            },
            video: "10:59"
        },
        {
            id: 48,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "MI State",
                seed: 2,
                score: 71,
                logo: "https://placehold.co/30x30/green/white?text=MSU"
            },
            loser: {
                name: "New Mexico",
                seed: 10,
                score: 63,
                logo: "https://placehold.co/30x30/red/white?text=UNM"
            },
            video: "9:40"
        },
        {
            id: 49,
            round: 2,
            name: "Round of 32",
            date: "Sun, Mar 23",
            day: "sunday",
            winner: { 
                name: "Arizona",
                seed: 4,
                score: 87,
                logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
            },
            loser: {
                name: "Oregon",
                seed: 5,
                score: 83,
                logo: "https://placehold.co/30x30/green/yellow?text=ORE"
            },
            video: "9:53"
        },
        // Sweet 16 games - Thursday March 28
        {
            id: 101,
            round: 3,
            name: "Sweet 16",
            date: "Thu, Mar 28",
            day: "thursday",
            winner: { 
                name: "Texas Tech",
                seed: 3,
                score: 85,
                logo: "https://placehold.co/30x30/red/black?text=TTU"
            },
            loser: {
                name: "Arkansas",
                seed: 10,
                score: 83,
                logo: "https://placehold.co/30x30/red/white?text=ARK"
            },
            video: "13:04"
        },
        {
            id: 102,
            round: 3,
            name: "Sweet 16",
            date: "Thu, Mar 28",
            day: "thursday",
            winner: { 
                name: "Duke",
                seed: 1,
                score: 100,
                logo: "https://placehold.co/30x30/blue/white?text=DUKE"
            },
            loser: {
                name: "Arizona",
                seed: 4,
                score: 93,
                logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
            },
            video: "12:28"
        },
        {
            id: 103,
            round: 3,
            name: "Sweet 16",
            date: "Thu, Mar 28",
            day: "thursday",
            winner: { 
                name: "Florida",
                seed: 1,
                score: 87,
                logo: "https://placehold.co/30x30/blue/orange?text=FLA"
            },
            loser: {
                name: "Maryland",
                seed: 4,
                score: 71,
                logo: "https://placehold.co/30x30/red/white?text=UMD"
            },
            video: "10:05"
        },
        {
            id: 104,
            round: 3,
            name: "Sweet 16",
            date: "Thu, Mar 28",
            day: "thursday",
            winner: { 
                name: "Alabama",
                seed: 2,
                score: 113,
                logo: "https://placehold.co/30x30/crimson/white?text=ALA"
            },
            loser: {
                name: "BYU",
                seed: 6,
                score: 88,
                logo: "https://placehold.co/30x30/blue/white?text=BYU"
            },
            video: "12:54"
        }
    ];

    // Get HTML elements
    const gamesContainer = document.getElementById('games-container');
    const mobileGamesContainer = document.querySelector('.mobile-games-container');
    const cells = document.querySelectorAll('.board-cell');
    const roundFilters = document.querySelectorAll('input[name="round-filter"]');
    const boardFilters = document.querySelectorAll('input[name="board-filter"]');
    
    // Track which squares are winners for each round
    const winnerSquares = {
        round1: {},
        round2: {},
        round3: {},
        round4: {},
        round5: {}
    };
    
    // Function to filter board cells based on selected round
    function filterBoardCells(selectedRound) {
        cells.forEach(cell => {
            // Remove all filtered classes
            cell.classList.remove('filtered-out', 'filtered-in', 'multiple-wins');
            
            // If "All Rounds" is selected, show all cells with their original colors
            if (selectedRound === 'all') {
                // Restore all original winner classes for this cell
                const cellId = parseInt(cell.getAttribute('data-id'));
                Object.keys(winnerSquares).forEach(roundKey => {
                    if (winnerSquares[roundKey][cellId] && winnerSquares[roundKey][cellId].length > 0) {
                        const round = roundKey.replace('round', '');
                        cell.classList.add(`round-${round}-winner`);
                        if (winnerSquares[roundKey][cellId].length > 1) {
                            cell.classList.add('multiple-wins');
                        }
                    }
                });
                return;
            }
            
            // Check if the cell has a win for the selected round
            const cellId = parseInt(cell.getAttribute('data-id'));
            const roundKey = `round${selectedRound}`;
            const winsForRound = winnerSquares[roundKey][cellId];
            
            // Apply filtered classes
            if (winsForRound && winsForRound.length > 0) {
                cell.classList.add('filtered-in');
                // Keep only the background color for the selected round
                cell.classList.remove('round-1-winner', 'round-2-winner', 'round-3-winner', 'round-4-winner', 'round-5-winner');
                cell.classList.add(`round-${selectedRound}-winner`);
                
                // Add multiple-wins class if there are multiple wins in this round
                if (winsForRound.length > 1) {
                    cell.classList.add('multiple-wins');
                }
            } else {
                cell.classList.add('filtered-out');
                // Remove all winner classes for filtered out cells
                cell.classList.remove('round-1-winner', 'round-2-winner', 'round-3-winner', 'round-4-winner', 'round-5-winner');
            }
        });
    }
    
    // Add event listeners for board filters
    boardFilters.forEach(input => {
        input.addEventListener('change', function() {
            filterBoardCells(this.value);
        });
    });
    
    // Function to get the last digit of a number
    function getLastDigit(number) {
        return number % 10;
    }
    
    // Function to find the square based on winning and losing scores
    function findSquare(winningScore, losingScore) {
        const winLastDigit = getLastDigit(winningScore);
        const loseLastDigit = getLastDigit(losingScore);
        
        // Find the column index (0-based) for the winning score
        const columnHeaders = document.querySelectorAll('.header-cell');
        let columnIndex = -1;
        
        for (let i = 0; i < columnHeaders.length; i++) {
            if (parseInt(columnHeaders[i].textContent) === winLastDigit) {
                columnIndex = i;
                break;
            }
        }
        
        // Find the row index (0-based) for the losing score
        const rowHeaders = document.querySelectorAll('.row-header');
        let rowIndex = -1;
        
        for (let i = 0; i < rowHeaders.length; i++) {
            if (parseInt(rowHeaders[i].textContent) === loseLastDigit) {
                rowIndex = i;
                break;
            }
        }
        
        if (columnIndex !== -1 && rowIndex !== -1) {
            // Calculate the cell ID based on row and column
            // Formula: (row * number of columns) + column + 1
            const cellId = (rowIndex * 10) + columnIndex + 1;
            return {
                element: document.querySelector(`.board-cell[data-id="${cellId}"]`),
                cellId: cellId,
                winDigit: winLastDigit,
                loseDigit: loseLastDigit
            };
        }
        
        return null;
    }
    
    // Function to analyze all games and mark winning squares
    function analyzeGames() {
        // Clear existing winner tracking
        Object.keys(winnerSquares).forEach(key => {
            winnerSquares[key] = {};
        });
        
        // Remove existing winner classes
        cells.forEach(cell => {
            cell.classList.remove('round-1-winner', 'round-2-winner', 'round-3-winner', 'round-4-winner', 'round-5-winner');
        });
        
        // Process all games to identify winning squares for each round
        ncaaGames.forEach(game => {
            const square = findSquare(game.winner.score, game.loser.score);
            if (square) {
                const roundKey = `round${game.round}`;
                
                // Store this square as a winner for this round
                if (!winnerSquares[roundKey][square.cellId]) {
                    winnerSquares[roundKey][square.cellId] = [];
                }
                
                winnerSquares[roundKey][square.cellId].push(game);
                
                // Add the appropriate round winner class
                square.element.classList.add(`round-${game.round}-winner`);
            }
        });
    }
    
    // Function to show popup with square details
    function showSquarePopup(cellId) {
        // Get square name/owner
        const cell = document.querySelector(`.board-cell[data-id="${cellId}"]`);
        const squareName = cell.textContent.trim();
        
        // Get all winning games for this square
        const allWins = [];
        const roundDescriptions = {
            round1: "Round of 64",
            round2: "Round of 32",
            round3: "Sweet 16",
            round4: "Elite 8",
            round5: "Final Four"
        };
        
        // Collect all wins across all rounds
        Object.keys(winnerSquares).forEach(roundKey => {
            if (winnerSquares[roundKey][cellId]) {
                winnerSquares[roundKey][cellId].forEach(game => {
                    allWins.push({
                        round: game.round,
                        roundName: roundDescriptions[roundKey],
                        winner: game.winner,
                        loser: game.loser,
                        date: game.date,
                        game: game
                    });
                });
            }
        });
        
        // Create popup element
        const popup = document.createElement('div');
        popup.className = 'square-popup';
        
        // Create popup content
        let popupContent = `
            <div class="square-popup-header">
                <h3 class="square-popup-title">Square #${cellId}: ${squareName}</h3>
                <button class="square-popup-close" type="button" aria-label="Close popup">&times;</button>
            </div>
            <div class="square-popup-content">
                <h4>Square Details</h4>
                <p>Winning score ends with: ${getColumnsDigitForCell(cellId)}</p>
                <p>Losing score ends with: ${getRowsDigitForCell(cellId)}</p>
            </div>
        `;
        
        // Add wins section
        if (allWins.length > 0) {
            popupContent += `
                <div class="square-popup-content">
                    <h4>Winning Games (${allWins.length})</h4>
                    <ul class="square-wins-list">
            `;
            
            // Sort wins by round (higher rounds first)
            allWins.sort((a, b) => b.round - a.round);
            
            // Add each win
            allWins.forEach(win => {
                popupContent += `
                    <li class="square-win-item round-${win.round}" data-game-id="${win.game.id}">
                        <div class="square-win-teams">
                            ${win.winner.name} vs ${win.loser.name}
                            <span class="square-win-score">(${win.winner.score}-${win.loser.score})</span>
                        </div>
                        <span class="square-win-date">${win.roundName} · ${win.date}</span>
                    </li>
                `;
            });
            
            popupContent += `
                    </ul>
                </div>
            `;
        } else {
            popupContent += `
                <div class="square-popup-content">
                    <h4>Winning Games</h4>
                    <div class="no-wins-message">No winning games yet for this square.</div>
                </div>
            `;
        }
        
        // Add footer
        popupContent += `
            <div class="square-popup-footer">
                <button class="square-popup-button" onclick="closePopup()">Close</button>
            </div>
        `;
        
        popup.innerHTML = popupContent;
        
        // Create backdrop with improved touch support
        const backdrop = createBackdrop();
        
        // Add popup and backdrop to body
        document.body.appendChild(backdrop);
        document.body.appendChild(popup);
        
        // Ensure close button works with touch
        const closeBtn = popup.querySelector('.square-popup-close');
        closeBtn.addEventListener('click', closePopup);
        closeBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            closePopup();
        });
        
        // Same for the close button in footer if it exists
        const footerCloseBtn = popup.querySelector('.square-popup-button');
        if (footerCloseBtn) {
            footerCloseBtn.addEventListener('click', closePopup);
            footerCloseBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                closePopup();
            });
        }
        
        // Add event listeners for win items with touch support
        const winItems = popup.querySelectorAll('.square-win-item');
        winItems.forEach(item => {
            const handleWinItemClick = function() {
                const gameId = parseInt(this.getAttribute('data-game-id'));
                const game = ncaaGames.find(g => g.id === gameId);
                if (game) {
                    closePopup();
                    
                    // Highlight the game in the games list
                    const gameItem = document.querySelector(`.game-item[data-id="${gameId}"]`);
                    if (gameItem) {
                        gameItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        highlightGameWinner(game, gameItem);
                    } else {
                        // If game is not visible in the current filtered view, change the filter
                        document.querySelector(`input[name="round-filter"][value="${game.round}"]`).click();
                        setTimeout(() => {
                            const newGameItem = document.querySelector(`.game-item[data-id="${gameId}"]`);
                            if (newGameItem) {
                                newGameItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                highlightGameWinner(game, newGameItem);
                            }
                        }, 100);
                    }
                }
            };
            
            item.addEventListener('click', handleWinItemClick);
            item.addEventListener('touchend', function(e) {
                e.preventDefault();
                handleWinItemClick.call(this);
            });
        });
    }
    
    // Helper function to get the column digit for a cell ID
    function getColumnsDigitForCell(cellId) {
        const colIndex = (cellId - 1) % 10;
        const columnHeaders = document.querySelectorAll('.header-cell');
        return columnHeaders[colIndex].textContent;
    }
    
    // Helper function to get the row digit for a cell ID
    function getRowsDigitForCell(cellId) {
        const rowIndex = Math.floor((cellId - 1) / 10);
        const rowHeaders = document.querySelectorAll('.row-header');
        return rowHeaders[rowIndex].textContent;
    }
    
    // Function to close popup
    function closePopup() {
        const popup = document.querySelector('.square-popup');
        const backdrop = document.querySelector('.popup-backdrop');
        
        if (popup) {
            popup.remove();
        }
        
        if (backdrop) {
            backdrop.remove();
        }
    }
    
    // Make closePopup function globally available
    window.closePopup = closePopup;
    
    // Function to create the popup backdrop with touch support
    function createBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.className = 'popup-backdrop';
        
        // Handle both click and touch events
        backdrop.addEventListener('click', closePopup);
        backdrop.addEventListener('touchend', function(e) {
            e.preventDefault();
            closePopup();
        });
        
        return backdrop;
    }
    
    // Function to render games with optional round filter
    function renderGames(roundFilter = 'all', dayFilter = 'all') {
        gamesContainer.innerHTML = '';
        
        ncaaGames.forEach(game => {
            // Apply filters
            if (roundFilter !== 'all' && game.round !== parseInt(roundFilter)) {
                return;
            }
            
            // Apply day filter for both Round 1 and Round 2
            if (dayFilter !== 'all' && game.day !== dayFilter) {
                return;
            }
            
            // Find winning square for this game
            const square = findSquare(game.winner.score, game.loser.score);
            const squareNumber = square ? square.cellId : null;
            
            // Create game item
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');
            gameItem.dataset.id = game.id;
            
            // Create winner team
            const winnerTeam = document.createElement('div');
            winnerTeam.classList.add('team', 'winner');
            
            const winnerSeed = document.createElement('span');
            winnerSeed.classList.add('seed');
            winnerSeed.textContent = game.winner.seed;
            
            const winnerLogo = document.createElement('div');
            winnerLogo.classList.add('team-logo');
            if (game.winner.logo) {
                const logoImg = document.createElement('img');
                logoImg.src = game.winner.logo;
                logoImg.alt = game.winner.name;
                winnerLogo.appendChild(logoImg);
            }
            
            const winnerName = document.createElement('div');
            winnerName.classList.add('team-name');
            winnerName.textContent = game.winner.name;
            
            const winnerScore = document.createElement('div');
            winnerScore.classList.add('score');
            winnerScore.textContent = game.winner.score;
            
            winnerTeam.appendChild(winnerSeed);
            winnerTeam.appendChild(winnerLogo);
            winnerTeam.appendChild(winnerName);
            winnerTeam.appendChild(winnerScore);
            
            // Create loser team
            const loserTeam = document.createElement('div');
            loserTeam.classList.add('team');
            
            const loserSeed = document.createElement('span');
            loserSeed.classList.add('seed');
            loserSeed.textContent = game.loser.seed;
            
            const loserLogo = document.createElement('div');
            loserLogo.classList.add('team-logo');
            if (game.loser.logo) {
                const logoImg = document.createElement('img');
                logoImg.src = game.loser.logo;
                logoImg.alt = game.loser.name;
                loserLogo.appendChild(logoImg);
            }
            
            const loserName = document.createElement('div');
            loserName.classList.add('team-name');
            loserName.textContent = game.loser.name;
            
            const loserScore = document.createElement('div');
            loserScore.classList.add('score');
            loserScore.textContent = game.loser.score;
            
            loserTeam.appendChild(loserSeed);
            loserTeam.appendChild(loserLogo);
            loserTeam.appendChild(loserName);
            loserTeam.appendChild(loserScore);
            
            // Add teams to game item
            gameItem.appendChild(winnerTeam);
            gameItem.appendChild(loserTeam);
            
            // Create game meta with square number
            const gameMeta = document.createElement('div');
            gameMeta.classList.add('game-meta');
            
            // Create a container div with flexbox for game info and square number
            const gameMetaContainer = document.createElement('div');
            gameMetaContainer.classList.add('game-meta-container');
            
            // Game info on the left
            const gameInfo = document.createElement('span');
            gameInfo.classList.add('text-muted');
            gameInfo.innerHTML = `${game.name} · ${game.date}`;
            if (game.video) {
                gameInfo.innerHTML += ` · <i class="ti ti-player-play"></i> ${game.video}`;
            }
            
            // Square number on the right
            if (squareNumber !== null) {
                const squareDisplay = document.createElement('span');
                squareDisplay.classList.add('square-number');
                squareDisplay.textContent = `Square #${squareNumber}`;
                
                // Add both to the container
                gameMetaContainer.appendChild(gameInfo);
                gameMetaContainer.appendChild(squareDisplay);
            } else {
                // Just add the game info if no square number
                gameMetaContainer.appendChild(gameInfo);
            }
            
            // Add the container to the game meta
            gameMeta.appendChild(gameMetaContainer);
            
            // Add meta to game item
            gameItem.appendChild(gameMeta);
            
            // Add click event
            gameItem.addEventListener('click', function() {
                highlightGameWinner(game, this);
            });
            
            gamesContainer.appendChild(gameItem);
        });
    }
    
    // Function to render games in the mobile container
    function renderMobileGames(roundFilter = 'all', dayFilter = 'all') {
        if (!mobileGamesContainer) return;
        
        mobileGamesContainer.innerHTML = '';
        
        ncaaGames.forEach(game => {
            // Apply round filter
            if (roundFilter !== 'all' && game.round !== parseInt(roundFilter)) {
                return;
            }
            
            // Apply day filter
            if (dayFilter !== 'all' && game.day !== dayFilter) {
                return;
            }
            
            // Find winning square for this game
            const square = findSquare(game.winner.score, game.loser.score);
            const squareNumber = square ? square.cellId : null;
            
            // Create mobile game card
            const gameCard = document.createElement('div');
            gameCard.classList.add('mobile-game-card');
            gameCard.dataset.id = game.id;
            
            // Create winner/loser display with winning square
            const matchup = document.createElement('div');
            
            let matchupHTML = `
                <div class="d-flex align-items-center mb-2">
                    <span class="badge bg-success me-1" style="color: white;">${game.winner.seed}</span>
                    <strong>${game.winner.name}</strong>
                    <span class="ms-auto">${game.winner.score}</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <span class="badge bg-secondary me-1" style="color: white;">${game.loser.seed}</span>
                    <span>${game.loser.name}</span>
                    <span class="ms-auto">${game.loser.score}</span>
                </div>
                <div class="game-meta-container">
                    <span class="text-muted small">${game.name} · ${game.date}</span>`;
                    
            // Add square number if available
            if (squareNumber !== null) {
                matchupHTML += `<span class="square-number">Square #${squareNumber}</span>`;
            }
            
            matchupHTML += `</div>`;
            
            matchup.innerHTML = matchupHTML;
            gameCard.appendChild(matchup);
            
            // Add click event
            gameCard.addEventListener('click', function() {
                highlightGameWinner(game, this);
            });
            
            mobileGamesContainer.appendChild(gameCard);
        });
    }
    
    // Function to highlight the winning square when a game is clicked
    function highlightGameWinner(game, clickedElement) {
        // Remove active class from all game items
        document.querySelectorAll('.game-item, .mobile-game-card').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked element
        clickedElement.classList.add('active');
        
        // Find the winning square for this game
        const square = findSquare(game.winner.score, game.loser.score);
        
        // Remove highlight class from all cells
        document.querySelectorAll('.board-cell').forEach(cell => {
            cell.classList.remove('highlight');
        });
        
        // Add highlight class to winning square
        if (square) {
            square.element.classList.add('highlight');
            
            // Scroll to the winning square if needed
            square.element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    
    // Setup event listeners for filters
    document.querySelectorAll('input[name="round-filter"]').forEach(input => {
        input.addEventListener('change', function() {
            const roundFilter = this.value;
            const dayFilter = document.querySelector('input[name="day-filter"]:checked')?.value || 'all';
            
            // Toggle day filter visibility and adjust available days
            const dayFiltersContainer = document.querySelector('.day-filters');
            
            // Show day filters for Round 1 (Round of 64) or Round 2 (Round of 32)
            if (roundFilter === '1' || roundFilter === '2' || roundFilter === 'all') {
                dayFiltersContainer.style.display = 'block';
                
                // Show appropriate day options based on the round
                document.querySelectorAll('.day-filter-r1, .day-filter-r2').forEach(elem => {
                    elem.style.display = 'none';
                });
                
                if (roundFilter === '1') {
                    // Round 1 has Thursday and Friday games
                    document.querySelectorAll('.day-filter-r1').forEach(elem => {
                        elem.style.display = 'block';
                    });
                    // Select "All Days" by default when switching
                    document.querySelector('input[name="day-filter"][value="all"]').checked = true;
                } else if (roundFilter === '2') {
                    // Round 2 has Saturday and Sunday games
                    document.querySelectorAll('.day-filter-r2').forEach(elem => {
                        elem.style.display = 'block';
                    });
                    // Select "All Days" by default when switching
                    document.querySelector('input[name="day-filter"][value="all"]').checked = true;
                } else {
                    // "All Rounds" selected - show both sets of day filters
                    document.querySelectorAll('.day-filter-r1, .day-filter-r2').forEach(elem => {
                        elem.style.display = 'block';
                    });
                }
            } else {
                dayFiltersContainer.style.display = 'none';
                // Reset day filter to 'all' when not on Round of 64
                document.querySelector('input[name="day-filter"][value="all"]').checked = true;
            }
            
            renderGames(roundFilter, dayFilter);
        });
    });
    
    // Add event listeners for day filters
    document.querySelectorAll('input[name="day-filter"]').forEach(input => {
        input.addEventListener('change', function() {
            const dayFilter = this.value;
            const roundFilter = document.querySelector('input[name="round-filter"]:checked')?.value || 'all';
            renderGames(roundFilter, dayFilter);
        });
    });
    
    // Add event listeners for mobile round filters
    document.querySelectorAll('input[name="mobile-round-filter"]').forEach(input => {
        input.addEventListener('change', function() {
            const roundFilter = this.value;
            const mobileDayFilters = document.querySelector('.mobile-day-filters');
            
            // Show day filters only for Round 1 (Round of 64) and Round 2 (Round of 32)
            if (roundFilter === '1' || roundFilter === '2' || roundFilter === 'all') {
                mobileDayFilters.style.display = 'block';
                
                // Show appropriate day options based on the round
                document.querySelectorAll('.mobile-day-filter-r1, .mobile-day-filter-r2').forEach(elem => {
                    elem.style.display = 'none';
                });
                
                if (roundFilter === '1') {
                    // Round 1 has Thursday and Friday games
                    document.querySelectorAll('.mobile-day-filter-r1').forEach(elem => {
                        elem.style.display = 'block';
                    });
                    // Select "All Days" by default when switching
                    document.querySelector('input[name="mobile-day-filter"][value="all"]').checked = true;
                } else if (roundFilter === '2') {
                    // Round 2 has Saturday and Sunday games
                    document.querySelectorAll('.mobile-day-filter-r2').forEach(elem => {
                        elem.style.display = 'block';
                    });
                    // Select "All Days" by default when switching
                    document.querySelector('input[name="mobile-day-filter"][value="all"]').checked = true;
                } else {
                    // "All Rounds" selected - show both sets of day filters
                    document.querySelectorAll('.mobile-day-filter-r1, .mobile-day-filter-r2').forEach(elem => {
                        elem.style.display = 'block';
                    });
                }
            } else {
                mobileDayFilters.style.display = 'none';
                // Reset day filter to 'all' when not on applicable rounds
                document.querySelector('input[name="mobile-day-filter"][value="all"]').checked = true;
            }
            
            const dayFilter = document.querySelector('input[name="mobile-day-filter"]:checked')?.value || 'all';
            renderMobileGames(roundFilter, dayFilter);
        });
    });
    
    // Add event listeners for mobile day filters
    document.querySelectorAll('input[name="mobile-day-filter"]').forEach(input => {
        input.addEventListener('change', function() {
            const dayFilter = this.value;
            const roundFilter = document.querySelector('input[name="mobile-round-filter"]:checked')?.value || 'all';
            renderMobileGames(roundFilter, dayFilter);
        });
    });
    
    // Initial render for desktop and mobile
    renderGames();
    renderMobileGames();
    
    // Analyze all games to mark winning squares
    analyzeGames();
    
    // Add click event to cells to show popup
    cells.forEach(cell => {
        // Add click/touch events for showing popup
        const showPopupHandler = function() {
            const cellId = parseInt(this.getAttribute('data-id'));
            showSquarePopup(cellId);
        };
        
        // Use multiple event types to ensure coverage across devices
        cell.addEventListener('click', showPopupHandler);
        cell.addEventListener('touchend', function(e) {
            e.preventDefault(); // Prevent default touch behavior
            showPopupHandler.call(this);
        });
        
        // Original hover effect code
        cell.addEventListener('mouseenter', function() {
            // Get the cell's data-id value
            const cellId = parseInt(this.getAttribute('data-id'));
            
            // Calculate the row and column (0-based index)
            const row = Math.floor((cellId - 1) / 10);
            const col = (cellId - 1) % 10;
            
            // Get the column and row headers
            const colHeader = document.querySelectorAll('.header-cell')[col];
            const rowHeader = document.querySelectorAll('.row-header')[row];
            
            // Highlight the headers
            colHeader.style.backgroundColor = '#d1ecf1';
            rowHeader.style.backgroundColor = '#d1ecf1';
            
            // Cell hover is now handled by CSS :hover for consistency
        });
        
        cell.addEventListener('mouseleave', function() {
            // Get the cell's data-id value
            const cellId = parseInt(this.getAttribute('data-id'));
            
            // Calculate the row and column (0-based index)
            const row = Math.floor((cellId - 1) / 10);
            const col = (cellId - 1) % 10;
            
            // Get the column and row headers
            const colHeader = document.querySelectorAll('.header-cell')[col];
            const rowHeader = document.querySelectorAll('.row-header')[row];
            
            // Reset the headers' background color
            colHeader.style.backgroundColor = '';
            rowHeader.style.backgroundColor = '';
            
            // Cell hover reset is now handled by CSS :hover for consistency
        });
    });
}); 