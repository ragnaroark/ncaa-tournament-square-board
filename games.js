// NCAA Tournament 2026 games data
// Update this file with new game results as they come in
const ncaaGames = [
    {
        id: 1,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "TCU",
            seed: 9,
            score: 66,
            logo: "https://placehold.co/30x30/purple/white?text=TCU"
        },
        loser: {
            name: "Ohio State",
            seed: 8,
            score: 64,
            logo: "https://placehold.co/30x30/red/white?text=OSU"
        }
    },
    {
        id: 2,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Nebraska",
            seed: 4,
            score: 76,
            logo: "https://placehold.co/30x30/red/white?text=NEB"
        },
        loser: {
            name: "Troy",
            seed: 13,
            score: 47,
            logo: "https://placehold.co/30x30/maroon/white?text=TROY"
        }
    },
    {
        id: 3,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Louisville",
            seed: 6,
            score: 83,
            logo: "https://placehold.co/30x30/red/white?text=LOU"
        },
        loser: {
            name: "South Florida",
            seed: 11,
            score: 79,
            logo: "https://placehold.co/30x30/green/gold?text=USF"
        },
        video: "11:44"
    },
    {
        id: 4,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "High Point",
            seed: 12,
            score: 83,
            logo: "https://placehold.co/30x30/purple/white?text=HPU"
        },
        loser: {
            name: "Wisconsin",
            seed: 5,
            score: 82,
            logo: "https://placehold.co/30x30/red/white?text=WIS"
        },
        video: "8:25"
    },
    {
        id: 5,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Duke",
            seed: 1,
            score: 71,
            logo: "https://placehold.co/30x30/blue/white?text=DUKE"
        },
        loser: {
            name: "Siena",
            seed: 16,
            score: 65,
            logo: "https://placehold.co/30x30/green/gold?text=SIEN"
        }
    },
    {
        id: 6,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Vanderbilt",
            seed: 5,
            score: 78,
            logo: "https://placehold.co/30x30/gold/black?text=VAN"
        },
        loser: {
            name: "McNeese State",
            seed: 12,
            score: 68,
            logo: "https://placehold.co/30x30/blue/gold?text=MCN"
        },
        video: "9:52"
    },
    {
        id: 7,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "MI State",
            seed: 3,
            score: 92,
            logo: "https://placehold.co/30x30/green/white?text=MSU"
        },
        loser: {
            name: "ND State",
            seed: 14,
            score: 67,
            logo: "https://placehold.co/30x30/green/gold?text=NDSU"
        },
        video: "8:30"
    },
    {
        id: 8,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Arkansas",
            seed: 4,
            score: 97,
            logo: "https://placehold.co/30x30/red/white?text=ARK"
        },
        loser: {
            name: "Hawaii",
            seed: 13,
            score: 78,
            logo: "https://placehold.co/30x30/green/white?text=HAW"
        },
        video: "11:15"
    },
    {
        id: 9,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "VCU",
            seed: 11,
            score: 82,
            logo: "https://placehold.co/30x30/gold/black?text=VCU"
        },
        loser: {
            name: "UNC",
            seed: 6,
            score: 78,
            logo: "https://placehold.co/30x30/blue/white?text=UNC"
        },
        video: "11:26"
    },
    {
        id: 10,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Michigan",
            seed: 1,
            score: 101,
            logo: "https://placehold.co/30x30/blue/gold?text=MICH"
        },
        loser: {
            name: "Howard",
            seed: 16,
            score: 80,
            logo: "https://placehold.co/30x30/blue/white?text=HOW"
        },
        video: "8:22"
    },
    {
        id: 11,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Texas A&M",
            seed: 10,
            score: 63,
            logo: "https://placehold.co/30x30/maroon/white?text=A&M"
        },
        loser: {
            name: "St Mary's CA",
            seed: 7,
            score: 50,
            logo: "https://placehold.co/30x30/red/white?text=SMC"
        }
    },
    {
        id: 12,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Texas",
            seed: 11,
            score: 79,
            logo: "https://placehold.co/30x30/orange/white?text=TEX"
        },
        loser: {
            name: "BYU",
            seed: 6,
            score: 71,
            logo: "https://placehold.co/30x30/blue/white?text=BYU"
        },
        video: "9:57"
    },
    {
        id: 13,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Illinois",
            seed: 3,
            score: 105,
            logo: "https://placehold.co/30x30/orange/blue?text=ILL"
        },
        loser: {
            name: "Penn",
            seed: 14,
            score: 70,
            logo: "https://placehold.co/30x30/red/blue?text=PENN"
        },
        video: "12:18"
    },
    {
        id: 14,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Saint Louis",
            seed: 9,
            score: 102,
            logo: "https://placehold.co/30x30/blue/white?text=SLU"
        },
        loser: {
            name: "Georgia",
            seed: 8,
            score: 77,
            logo: "https://placehold.co/30x30/red/black?text=UGA"
        }
    },
    {
        id: 15,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Houston",
            seed: 2,
            score: 78,
            logo: "https://placehold.co/30x30/red/white?text=HOU"
        },
        loser: {
            name: "Idaho",
            seed: 15,
            score: 47,
            logo: "https://placehold.co/30x30/gold/black?text=IDHO"
        },
        video: "8:24"
    },
    {
        id: 16,
        round: 1,
        name: "Round of 64",
        date: "Thu, Mar 19",
        day: "thursday",
        winner: {
            name: "Gonzaga",
            seed: 3,
            score: 73,
            logo: "https://placehold.co/30x30/blue/white?text=GONZ"
        },
        loser: {
            name: "Kennesaw St",
            seed: 14,
            score: 64,
            logo: "https://placehold.co/30x30/gold/black?text=KSU"
        },
        video: "8:22"
    },
    {
        id: 17,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Kentucky",
            seed: 7,
            score: 89,
            logo: "https://placehold.co/30x30/blue/white?text=UK"
        },
        loser: {
            name: "Santa Clara",
            seed: 10,
            score: 84,
            logo: "https://placehold.co/30x30/red/white?text=SCU"
        },
        video: "8:31"
    },
    {
        id: 18,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Texas Tech",
            seed: 5,
            score: 91,
            logo: "https://placehold.co/30x30/red/black?text=TTU"
        },
        loser: {
            name: "Akron",
            seed: 12,
            score: 71,
            logo: "https://placehold.co/30x30/blue/gold?text=AKR"
        },
        video: "9:58"
    },
    {
        id: 19,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Arizona",
            seed: 1,
            score: 92,
            logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
        },
        loser: {
            name: "LIU",
            seed: 16,
            score: 58,
            logo: "https://placehold.co/30x30/blue/white?text=LIU"
        },
        video: "11:07"
    },
    {
        id: 20,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Virginia",
            seed: 3,
            score: 82,
            logo: "https://placehold.co/30x30/orange/blue?text=UVA"
        },
        loser: {
            name: "Wright State",
            seed: 14,
            score: 73,
            logo: "https://placehold.co/30x30/green/gold?text=WSU"
        },
        video: "10:07"
    },
    {
        id: 21,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Iowa State",
            seed: 2,
            score: 108,
            logo: "https://placehold.co/30x30/red/gold?text=ISU"
        },
        loser: {
            name: "TN State",
            seed: 15,
            score: 74,
            logo: "https://placehold.co/30x30/blue/white?text=TSU"
        },
        video: "12:02"
    },
    {
        id: 22,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Alabama",
            seed: 4,
            score: 90,
            logo: "https://placehold.co/30x30/crimson/white?text=ALA"
        },
        loser: {
            name: "Hofstra",
            seed: 13,
            score: 70,
            logo: "https://placehold.co/30x30/blue/gold?text=HOF"
        },
        video: "11:58"
    },
    {
        id: 23,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Utah State",
            seed: 9,
            score: 86,
            logo: "https://placehold.co/30x30/blue/white?text=USU"
        },
        loser: {
            name: "Villanova",
            seed: 8,
            score: 76,
            logo: "https://placehold.co/30x30/blue/white?text=NOVA"
        },
        video: "7:40"
    },
    {
        id: 24,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Tennessee",
            seed: 6,
            score: 78,
            logo: "https://placehold.co/30x30/orange/white?text=TEN"
        },
        loser: {
            name: "Miami OH",
            seed: 11,
            score: 56,
            logo: "https://placehold.co/30x30/red/white?text=M-OH"
        },
        video: "8:35"
    },
    {
        id: 25,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Iowa",
            seed: 9,
            score: 67,
            logo: "https://placehold.co/30x30/gold/black?text=IOWA"
        },
        loser: {
            name: "Clemson",
            seed: 8,
            score: 61,
            logo: "https://placehold.co/30x30/orange/purple?text=CLEM"
        },
        video: "7:10"
    },
    {
        id: 26,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "St John's",
            seed: 5,
            score: 79,
            logo: "https://placehold.co/30x30/red/white?text=STJ"
        },
        loser: {
            name: "UNI",
            seed: 12,
            score: 53,
            logo: "https://placehold.co/30x30/purple/gold?text=UNI"
        },
        video: "9:02"
    },
    {
        id: 27,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "UCLA",
            seed: 7,
            score: 75,
            logo: "https://placehold.co/30x30/blue/gold?text=UCLA"
        },
        loser: {
            name: "UCF",
            seed: 10,
            score: 71,
            logo: "https://placehold.co/30x30/gold/black?text=UCF"
        },
        video: "8:30"
    },
    {
        id: 28,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Purdue",
            seed: 2,
            score: 104,
            logo: "https://placehold.co/30x30/gold/black?text=PUR"
        },
        loser: {
            name: "Queens NC",
            seed: 15,
            score: 71,
            logo: "https://placehold.co/30x30/blue/gold?text=QNC"
        },
        video: "8:24"
    },
    {
        id: 29,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Florida",
            seed: 1,
            score: 114,
            logo: "https://placehold.co/30x30/blue/orange?text=FLA"
        },
        loser: {
            name: "Prairie View",
            seed: 16,
            score: 55,
            logo: "https://placehold.co/30x30/purple/gold?text=PVU"
        },
        video: "11:35"
    },
    {
        id: 30,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Kansas",
            seed: 4,
            score: 68,
            logo: "https://placehold.co/30x30/blue/red?text=KU"
        },
        loser: {
            name: "CA Baptist",
            seed: 13,
            score: 60,
            logo: "https://placehold.co/30x30/blue/gold?text=CBU"
        },
        video: "8:18"
    },
    {
        id: 31,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "Miami FL",
            seed: 7,
            score: 80,
            logo: "https://placehold.co/30x30/green/orange?text=MIA"
        },
        loser: {
            name: "Missouri",
            seed: 10,
            score: 66,
            logo: "https://placehold.co/30x30/gold/black?text=MIZ"
        },
        video: "7:45"
    },
    {
        id: 32,
        round: 1,
        name: "Round of 64",
        date: "Fri, Mar 20",
        day: "friday",
        winner: {
            name: "UConn",
            seed: 2,
            score: 82,
            logo: "https://placehold.co/30x30/blue/white?text=CONN"
        },
        loser: {
            name: "Furman",
            seed: 15,
            score: 71,
            logo: "https://placehold.co/30x30/purple/white?text=FUR"
        },
        video: "8:02"
    },
    {
        id: 33,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "Michigan",
            seed: 1,
            score: 95,
            logo: "https://placehold.co/30x30/blue/gold?text=MICH"
        },
        loser: {
            name: "Saint Louis",
            seed: 9,
            score: 72,
            logo: "https://placehold.co/30x30/blue/white?text=SLU"
        },
        video: "8:19"
    },
    {
        id: 34,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "MI State",
            seed: 3,
            score: 77,
            logo: "https://placehold.co/30x30/green/white?text=MSU"
        },
        loser: {
            name: "Louisville",
            seed: 6,
            score: 69,
            logo: "https://placehold.co/30x30/red/white?text=LOU"
        },
        video: "8:30"
    },
    {
        id: 35,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "Duke",
            seed: 1,
            score: 81,
            logo: "https://placehold.co/30x30/blue/white?text=DUKE"
        },
        loser: {
            name: "TCU",
            seed: 9,
            score: 58,
            logo: "https://placehold.co/30x30/purple/white?text=TCU"
        },
        video: "8:30"
    },
    {
        id: 36,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "Houston",
            seed: 2,
            score: 88,
            logo: "https://placehold.co/30x30/red/white?text=HOU"
        },
        loser: {
            name: "Texas A&M",
            seed: 10,
            score: 57,
            logo: "https://placehold.co/30x30/maroon/white?text=A&M"
        },
        video: "8:19"
    },
    {
        id: 37,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "Texas",
            seed: 11,
            score: 74,
            logo: "https://placehold.co/30x30/orange/white?text=TEX"
        },
        loser: {
            name: "Gonzaga",
            seed: 3,
            score: 68,
            logo: "https://placehold.co/30x30/blue/white?text=GONZ"
        },
        video: "8:23"
    },
    {
        id: 38,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "Illinois",
            seed: 3,
            score: 76,
            logo: "https://placehold.co/30x30/orange/blue?text=ILL"
        },
        loser: {
            name: "VCU",
            seed: 11,
            score: 55,
            logo: "https://placehold.co/30x30/gold/black?text=VCU"
        },
        video: "8:24"
    },
    {
        id: 39,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "Nebraska",
            seed: 4,
            score: 74,
            logo: "https://placehold.co/30x30/red/white?text=NEB"
        },
        loser: {
            name: "Vanderbilt",
            seed: 5,
            score: 72,
            logo: "https://placehold.co/30x30/gold/black?text=VAN"
        },
        video: "8:28"
    },
    {
        id: 40,
        round: 2,
        name: "Round of 32",
        date: "Sat, Mar 21",
        day: "saturday",
        winner: {
            name: "Arkansas",
            seed: 4,
            score: 94,
            logo: "https://placehold.co/30x30/red/white?text=ARK"
        },
        loser: {
            name: "High Point",
            seed: 12,
            score: 88,
            logo: "https://placehold.co/30x30/purple/white?text=HPU"
        }
    },
    {
        id: 41,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "Purdue",
            seed: 2,
            score: 79,
            logo: "https://placehold.co/30x30/gold/black?text=PUR"
        },
        loser: {
            name: "Miami FL",
            seed: 7,
            score: 69,
            logo: "https://placehold.co/30x30/green/orange?text=MIA"
        },
        video: "8:15"
    },
    {
        id: 42,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "Iowa State",
            seed: 2,
            score: 82,
            logo: "https://placehold.co/30x30/red/gold?text=ISU"
        },
        loser: {
            name: "Kentucky",
            seed: 7,
            score: 63,
            logo: "https://placehold.co/30x30/blue/white?text=UK"
        },
        video: "8:17"
    },
    {
        id: 43,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "St John's",
            seed: 5,
            score: 67,
            logo: "https://placehold.co/30x30/red/white?text=STJ"
        },
        loser: {
            name: "Kansas",
            seed: 4,
            score: 65,
            logo: "https://placehold.co/30x30/blue/red?text=KU"
        },
        video: "8:29"
    },
    {
        id: 44,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "Tennessee",
            seed: 6,
            score: 79,
            logo: "https://placehold.co/30x30/orange/white?text=TEN"
        },
        loser: {
            name: "Virginia",
            seed: 3,
            score: 72,
            logo: "https://placehold.co/30x30/orange/blue?text=UVA"
        },
        video: "8:31"
    },
    {
        id: 45,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "Iowa",
            seed: 9,
            score: 73,
            logo: "https://placehold.co/30x30/gold/black?text=IOWA"
        },
        loser: {
            name: "Florida",
            seed: 1,
            score: 72,
            logo: "https://placehold.co/30x30/blue/orange?text=FLA"
        },
        video: "7:52"
    },
    {
        id: 46,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "Arizona",
            seed: 1,
            score: 78,
            logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
        },
        loser: {
            name: "Utah State",
            seed: 9,
            score: 66,
            logo: "https://placehold.co/30x30/blue/white?text=USU"
        },
        video: "9:42"
    },
    {
        id: 47,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "UConn",
            seed: 2,
            score: 73,
            logo: "https://placehold.co/30x30/blue/white?text=CONN"
        },
        loser: {
            name: "UCLA",
            seed: 7,
            score: 57,
            logo: "https://placehold.co/30x30/blue/gold?text=UCLA"
        },
        video: "7:29"
    },
    {
        id: 48,
        round: 2,
        name: "Round of 32",
        date: "Sun, Mar 22",
        day: "sunday",
        winner: {
            name: "Alabama",
            seed: 4,
            score: 90,
            logo: "https://placehold.co/30x30/crimson/white?text=ALA"
        },
        loser: {
            name: "Texas Tech",
            seed: 5,
            score: 65,
            logo: "https://placehold.co/30x30/red/black?text=TTU"
        }
    },
    {
        id: 49,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 26",
        day: "thursday",
        winner: {
            name: "Purdue",
            seed: 2,
            score: 79,
            logo: "https://placehold.co/30x30/gold/black?text=PUR"
        },
        loser: {
            name: "Texas",
            seed: 11,
            score: 77,
            logo: "https://placehold.co/30x30/orange/white?text=TEX"
        },
        video: "8:28"
    },
    {
        id: 50,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 26",
        day: "thursday",
        winner: {
            name: "Iowa",
            seed: 9,
            score: 77,
            logo: "https://placehold.co/30x30/gold/black?text=IOWA"
        },
        loser: {
            name: "Nebraska",
            seed: 4,
            score: 71,
            logo: "https://placehold.co/30x30/red/white?text=NEB"
        },
        video: "10:22"
    },
    {
        id: 51,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 26",
        day: "thursday",
        winner: {
            name: "Arizona",
            seed: 1,
            score: 109,
            logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
        },
        loser: {
            name: "Arkansas",
            seed: 4,
            score: 88,
            logo: "https://placehold.co/30x30/red/white?text=ARK"
        },
        video: "8:30"
    },
    {
        id: 52,
        round: 3,
        name: "Sweet 16",
        date: "Thu, Mar 26",
        day: "thursday",
        winner: {
            name: "Illinois",
            seed: 3,
            score: 65,
            logo: "https://placehold.co/30x30/orange/blue?text=ILL"
        },
        loser: {
            name: "Houston",
            seed: 2,
            score: 55,
            logo: "https://placehold.co/30x30/red/white?text=HOU"
        },
        video: "8:50"
    },
    {
        id: 53,
        round: 3,
        name: "Sweet 16",
        date: "Fri, Mar 27",
        day: "friday",
        winner: {
            name: "Duke",
            seed: 1,
            score: 80,
            logo: "https://placehold.co/30x30/blue/white?text=DUKE"
        },
        loser: {
            name: "St John's",
            seed: 5,
            score: 75,
            logo: "https://placehold.co/30x30/red/white?text=STJ"
        },
        video: "8:29"
    },
    {
        id: 54,
        round: 3,
        name: "Sweet 16",
        date: "Fri, Mar 27",
        day: "friday",
        winner: {
            name: "Michigan",
            seed: 1,
            score: 90,
            logo: "https://placehold.co/30x30/blue/gold?text=MICH"
        },
        loser: {
            name: "Alabama",
            seed: 4,
            score: 77,
            logo: "https://placehold.co/30x30/crimson/white?text=ALA"
        },
        video: "8:30"
    },
    {
        id: 55,
        round: 3,
        name: "Sweet 16",
        date: "Fri, Mar 27",
        day: "friday",
        winner: {
            name: "UConn",
            seed: 2,
            score: 67,
            logo: "https://placehold.co/30x30/blue/white?text=CONN"
        },
        loser: {
            name: "MI State",
            seed: 3,
            score: 63,
            logo: "https://placehold.co/30x30/green/white?text=MSU"
        },
        video: "9:54"
    },
    {
        id: 56,
        round: 3,
        name: "Sweet 16",
        date: "Fri, Mar 27",
        day: "friday",
        winner: {
            name: "Tennessee",
            seed: 6,
            score: 76,
            logo: "https://placehold.co/30x30/orange/white?text=TEN"
        },
        loser: {
            name: "Iowa State",
            seed: 2,
            score: 62,
            logo: "https://placehold.co/30x30/red/gold?text=ISU"
        },
        video: "8:30"
    },
    {
        id: 57,
        round: 4,
        name: "Elite Eight",
        date: "Sat, Mar 28",
        day: "saturday",
        winner: {
            name: "Illinois",
            seed: 3,
            score: 71,
            logo: "https://placehold.co/30x30/orange/blue?text=ILL"
        },
        loser: {
            name: "Iowa",
            seed: 9,
            score: 59,
            logo: "https://placehold.co/30x30/gold/black?text=IOWA"
        },
        video: "8:29"
    },
    {
        id: 58,
        round: 4,
        name: "Elite Eight",
        date: "Sat, Mar 28",
        day: "saturday",
        winner: {
            name: "Arizona",
            seed: 1,
            score: 79,
            logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
        },
        loser: {
            name: "Purdue",
            seed: 2,
            score: 64,
            logo: "https://placehold.co/30x30/gold/black?text=PUR"
        },
        video: "8:29"
    },
    {
        id: 59,
        round: 4,
        name: "Elite Eight",
        date: "Sun, Mar 29",
        day: "sunday",
        winner: {
            name: "Michigan",
            seed: 1,
            score: 95,
            logo: "https://placehold.co/30x30/blue/gold?text=MICH"
        },
        loser: {
            name: "Tennessee",
            seed: 6,
            score: 62,
            logo: "https://placehold.co/30x30/orange/white?text=TEN"
        },
        video: "10:53"
    },
    {
        id: 60,
        round: 4,
        name: "Elite Eight",
        date: "Sun, Mar 29",
        day: "sunday",
        winner: {
            name: "UConn",
            seed: 2,
            score: 73,
            logo: "https://placehold.co/30x30/blue/white?text=CONN"
        },
        loser: {
            name: "Duke",
            seed: 1,
            score: 72,
            logo: "https://placehold.co/30x30/blue/white?text=DUKE"
        },
        video: "8:25"
    },
    {
        id: 61,
        round: 5,
        name: "Final Four",
        date: "Sat, Apr 4",
        day: "saturday",
        winner: {
            name: "UConn",
            seed: 2,
            score: 71,
            logo: "https://placehold.co/30x30/blue/white?text=CONN"
        },
        loser: {
            name: "Illinois",
            seed: 3,
            score: 62,
            logo: "https://placehold.co/30x30/orange/blue?text=ILL"
        },
        video: "7:45"
    },
    {
        id: 62,
        round: 5,
        name: "Final Four",
        date: "Sat, Apr 4",
        day: "saturday",
        winner: {
            name: "Michigan",
            seed: 1,
            score: 91,
            logo: "https://placehold.co/30x30/blue/gold?text=MICH"
        },
        loser: {
            name: "Arizona",
            seed: 1,
            score: 73,
            logo: "https://placehold.co/30x30/red/blue?text=ARIZ"
        },
        video: "8:00"
    }
];
