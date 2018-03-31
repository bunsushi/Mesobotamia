console.log('A junior scribe is too concerned with feeding his hunger; he does not pay attention to the scribal art.')

var Twit = require('twit')
var config = require('./config')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var bot = new Twit(config);

var sumerSays = [
    `Who can compete with righteousness? It creates life. (1.1)`,
    `If wickedness exerts itself, how will Utu succeed? (1.2)`,
    `You should not cut the throat of that which has already had its throat cut. (1.3)`,
    `You should not say to Ningiszida: "Let me live!" (1.4)`,
    `Do not make me pass through the gate! (1.5)`,
    `What has submitted will exhibit resistance. (1.6)`,
    `What has been destroyed belongs to a god. No one is able to take it away. (1.7)`,
    `"Though I still have bread left over, I will eat your bread!" Will this endear a man to the household of his friend? (1.8)`,
    `If bread is leftover, the mongoose eats it. If I have any bread left over, then a stranger will eat it. (1.9)`,
    `My things changed things. (1.10)`,
    `You don't speak of that which you have found. You talk only about what you have lost. (1.11)`,
    `Something which has never occurred since time immemorial: a young woman did not fart in her husband's embrace. (1.12)`,
    `It is a thing of short duration. (1.13)`,
    `Whatever it is that hurts you, don't talk to anyone about it. (1.14)`,
    `Wealth is far away, poverty is close at hand. (1.15)`,
    `He who possesses many things is constantly on guard. (1.16)`,
    `Possessions make trust of crucial importance. (1.17)`,
    `Possessions are flying birds--they never find a place to settle. (1.18)`,
    `Good fortune is embedded in organization and wisdom. (1.19)`,
    `What is eaten for today (?) was put there by the dog. What is eaten by the dog was put there for today (?). (1.20)`,
    `One shouldn't scorn bread which has turned bad. (1.21)`,
    `Give out only half a loaf voluntarily! (1.22)`,
    `To be wealthy and insist on demanding more is abominable. (1.23)`,
    `Let him decree the fates while consuming what you have made. (1.26)`,
    `I always seem to be speaking about unpleasant things. (1.27)`,
    `When a purchase is settled it is soon out of mind. (1.28)`,
    `He did something never seen before. (1.29)`,
    `That which does not eat grass is a wild bull of the mountains. That which does not drink water is a gazelle of the mountains. (1.30)`,
    `One does not returned borrowed bread. (1.31)`,
    `The herald rejoices when the estate makes expenditures. (1.32)`,
    `The steward rejoices when the estate increased its income. (1.33)`,
    `Don't pick things now; they will bear fruit later. (1.35)`,
    `Who will listen to your translations? (1.36)`,
    `What you are doing is a small accomplishment. That man is not doing a man's work. (1.37)`,
    `Let his bread be foul food; no man should eat it. (1.40)`,
    `Let his food be bread and ... eggs, so that it clogs his throat. (1.41)`,
    `Let his food be ... bones, so that it sticks in his throat. (1.42)`,
    `Barley flour, in the fields, is meat fat. (1.48)`,
    `Whatever food is available in the fields is to be eaten alone. (1.49)`,
    `Chickpea-flour is appropriate for every woman in the palace. (1.50)`,
    `His bread is finished. (1.51)`,
    `There is no baked cake in the middle of the dough. (1.52)`,
    `Give me my tools and I will launch my boat. (1.54)`,
    `When he walks on the streets no one greets him. And when he comes home to his wife, "Bad Name" is what he is called. (1.56)`,
    `The lives of the poor do not survive their deaths. (1.57)`,
    `In the city where there are no dogs, the fox is boss. (1.65)`,
    `You should drive them like pack-assess into a death-stricken city (1.68)`,
    `Like a clod thrown into the water, may it be destroyed as it disintegrates. (1.76)`,
    `Beer is a bull. The mouth is its stairway. (1.77)`,
    `It is an insult resulting from an insult. It is a curse resulting from a curse. It is the constant renewal of destiny. (1.80)`,
    `To accept a verdict is possible. To accept a curse is impossible. (1.81)`,
    `My girlfriend's heart is a heart made for me. (1.91)`,
    `He broke it into pieces and sated his hunger. He licked his hands and belched. (1.101)`,
    `He who drinks beer drinks water. (1.102)`,
    `A heart never created hatred; speech created hatred. (1.105)`,
    `(line fragmentary)`,
    `You cannot butt me with your horns! Who is it that you are butting! You cannot kill me--I am running away! (1.109)`,
    `My husband heaps up for me, my child measures out for me; let my lover pick the bones from the fish for me. (1.125)`,
    `A plant as sweet as a husband does not grow in the steppe. (1.126)`,
    `In the sky there is the raven; on the earth there is the mongoose; in the desert there is the lion ...; my husband! Where shall I go? (1.128)`,
    `...the brothers in anger destroyed their father's estate. (1.141)`,
    `Thus my mother and my younger sister act toward me; ... am I so deficient in judgment that I should offer my cheek to her? (1.143)`,
    `You are not one who stays in one place, you are one who is everywhere. (1.144)`,
    `Accept your lot and make your mother happy. Run fast and make your god happy. (1.145)`,
    `Marry a wife according to your choice. Have children to your heart's content. (1.146)`,
    `Girl, your brother cannot choose for you; whom do you choose? (1.148)`,
    `Girl, your brother is like me. A brother should let you live as would I. (1.149)`,
    `When I married a malicious husband, when I bore a malicious son, an unhappy heart was assigned to me. (1.151)`,
    `He who does not support a wife, he who does not support a child, has no cause for celebration. (1.153)`,
    `A malicious wife living in the house is worse than all diseases. (1.154)`,
    `My wife said "Unfaithful!" to me--shall I go chasing after women's genitals? (1.158)`,
    `An unfaithful penis matches an unfaithful vagina. (1.159)`,
    `What...? A tradesman gave it to me... (1.164)`,
    `I walk about, I don't get tired. I keep moving, I don't sleep. (1.174)`,
    `When the rags have been cut up, when the barley is lying in the dust, what is there left to get? (1.175)`,
    `I am a lady who wears large garments. Let me cut my loincloth! (1.176)`,
    `When you are eating, may nothing lack. When you are in need of water, may things not dry up. (1.178)`,
    `A chattering girl is silenced by her mother. A chattering boy is not silenced by his mother. (1.185)`,
    `To be sick is acceptable; to be pregnant is painful; but to be pregnant and sick is just too much. (1.193-194)`
]

function randomWisdom(sumerSays) {
    return sumerSays[Math.floor(Math.random() * sumerSays.length)];
}

var ziusudra = randomWisdom(sumerSays);

bot.post('statuses/update', { status: ziusudra }, function (err, data, response) {
    console.log(data)
});