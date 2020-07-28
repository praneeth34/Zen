var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omblet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
};

cat.height = 2;
cat.weight = 6;
cat.name = "Fluffyy";
cat.catFriends[0].activities.push("like playing with toy", "love chasing mice");
cat.catFriends[1].activities.push("like playing with toy", "love chasing mice");
cat.catFriends[0].furcolor = "golden brown";
console.log(cat);
console.log(cat.catFriends[0].activities, cat.catFriends[1].activities);
console.log(cat.catFriends[0].name, cat.catFriends[1].name);
console.log(cat.catFriends[0].weight + cat.catFriends[1].weight);
console.log(
  cat.catFriends[0].activities.length + cat.catFriends[1].activities.length
);
