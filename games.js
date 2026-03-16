// NCAA Tournament games data
// Update this file with new game results as they come in
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
    },
    {
        id: 105,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 28",
        day: "thursday",
        winner: {
            name: "Michigan State",
            seed: 2,
            score: 73,
            logo: "https://placehold.co/30x30/green/white?text=MSU"
        },
        loser: {
            name: "Ole Miss",
            seed: 6,
            score: 70,
            logo: "https://placehold.co/30x30/red/blue?text=MISS"
        },
        video: "9:41"
    },
    {
        id: 106,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 28",
        day: "thursday",
        winner: {
            name: "Tennessee",
            seed: 2,
            score: 78,
            logo: "https://placehold.co/30x30/orange/white?text=TEN"
        },
        loser: {
            name: "Kentucky",
            seed: 3,
            score: 65,
            logo: "https://placehold.co/30x30/blue/white?text=UK"
        },
        video: "8:29"
    },
    {
        id: 107,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 28",
        day: "thursday",
        winner: {
            name: "Auburn",
            seed: 1,
            score: 78,
            logo: "https://placehold.co/30x30/blue/orange?text=AUB"
        },
        loser: {
            name: "Michigan",
            seed: 5,
            score: 65,
            logo: "https://placehold.co/30x30/blue/gold?text=MICH"
        },
        video: "11:04"
    },
    {
        id: 108,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 28",
        day: "thursday",
        winner: {
            name: "Houston",
            seed: 1,
            score: 62,
            logo: "https://placehold.co/30x30/red/white?text=HOU"
        },
        loser: {
            name: "Purdue",
            seed: 4,
            score: 60,
            logo: "https://placehold.co/30x30/gold/black?text=PUR"
        },
        video: "10:37"
    },
    // Elite Eight games - March 30
    {
        id: 201,
        round: 4,
        name: "Elite Eight",
        date: "Sat, Mar 29",
        day: "saturday",
        winner: {
            name: "Florida",
            seed: 1,
            score: 84,
            logo: "https://placehold.co/30x30/blue/orange?text=FLA"
        },
        loser: {
            name: "Texas Tech",
            seed: 3,
            score: 79,
            logo: "https://placehold.co/30x30/red/black?text=TTU"
        },
        video: "11:06"
    },
    {
        id: 202,
        round: 4,
        name: "Elite Eight",
        date: "Sat, Mar 29",
        day: "saturday",
        winner: {
            name: "Duke",
            seed: 1,
            score: 85,
            logo: "https://placehold.co/30x30/blue/white?text=DUKE"
        },
        loser: {
            name: "Alabama",
            seed: 2,
            score: 65,
            logo: "https://placehold.co/30x30/crimson/white?text=ALA"
        },
        video: "10:23"
    },
    {
        id: 31,
        round: 4,
        name: "Elite Eight",
        date: "Sun, Mar 30",
        day: "sunday",
        winner: {
            name: "Houston",
            seed: 1,
            score: 69,
            logo: "https://placehold.co/30x30/red/white?text=HOU"
        },
        loser: {
            name: "Tennessee",
            seed: 2,
            score: 50,
            logo: "https://placehold.co/30x30/orange/white?text=TEN"
        },
        video: "7:17"
    },
    {
        id: 32,
        round: 4,
        name: "Elite Eight",
        date: "Sun, Mar 30",
        day: "sunday",
        winner: {
            name: "Auburn",
            seed: 1,
            score: 70,
            logo: "https://placehold.co/30x30/blue/white?text=AUB"
        },
        loser: {
            name: "Michigan State",
            seed: 2,
            score: 64,
            logo: "https://placehold.co/30x30/green/white?text=MSU"
        },
        video: "8:17"
    },
    // Final Four (Round 5)
    {
        id: 49,
        round: 5,
        name: "Final Four",
        date: "April 6, 2024",
        day: "saturday",
        winner: {
            seed: 1,
            name: "Florida",
            score: 79,
            logo: "https://placehold.co/30x30/blue/orange?text=FLA"
        },
        loser: {
            seed: 1,
            name: "Auburn",
            score: 73,
            logo: "https://placehold.co/30x30/blue/white?text=AUB"
        },
        videoTimestamp: "10:46"
    },
    {
        id: 50,
        round: 5,
        name: "Final Four",
        date: "April 6, 2024",
        day: "saturday",
        winner: {
            seed: 1,
            name: "Houston",
            score: 70,
            logo: "https://placehold.co/30x30/red/white?text=HOU"
        },
        loser: {
            seed: 1,
            name: "Duke",
            score: 67,
            logo: "https://placehold.co/30x30/blue/white?text=DUKE"
        },
        videoTimestamp: "9:46"
    },
    // Championship Game
    {
        id: 51,
        round: 6,
        name: "Championship",
        date: "April 8, 2024",
        day: "monday",
        winner: {
            seed: 1,
            name: "Florida",
            score: 65,
            logo: "https://placehold.co/30x30/blue/orange?text=FLA"
        },
        loser: {
            seed: 1,
            name: "Houston",
            score: 63,
            logo: "https://placehold.co/30x30/red/white?text=HOU"
        },
        videoTimestamp: "12:32"
    }
];
