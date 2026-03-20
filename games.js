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
    }
];
