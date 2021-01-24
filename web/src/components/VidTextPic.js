import React from 'react';
import picOfMacMiller from './picOfMac.jpg'
import logo from './actualLogo.jpg'



class VidTextPic extends React.Component {
    constructor(props) {
        super(props);
        this.typeOfDisplay = this.typeOfDisplay.bind(this);
    }

typeOfDisplay(typeOf){
    if (typeOf === "Video") {
        return(
        <div  className = "displayingContent">
            <iframe  width="560" height="315" src="https://www.youtube.com/embed/dEM7tiOym54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        );
    }
    else if (typeOf === null) {
        return(
        <div>     
            <h4></h4>
        </div>
        );
    }
   else if (typeOf === "Text") {
        return(
        <div  className = "displayingContent marginsForLyrics">     
            <h4  > [Part I: Self Care]

[Intro: Mac Miller]
Mhm, mhm
Okay
Yeah, yeah, yeah, yeah
Yeah, yeah, yeah
Dollars

[Chorus: Mac Miller]
I switched the time zone, but what do I know?
Spendin' nights hitchhikin', where will I go?
I could fly home, with my eyes closed
But it'd get kinda hard to see, that's no surprise though
And you could find me, I ain't hidin'
I don't move my feet when I be glidin'
I just slide in and then I roll
Out

[Verse 1: Mac Miller & JID]
Yep
Well, climbin' over that wall (Yeah, wall, wall,) mm
I remember, yes, I remember, yes, I remember it all
Swear the height be too tall (Yeah), so like September I fall
(Down, down, down) Down below, now I know that the medicine be on call, yeah (Gimme, gimme, gimme, gimme, gimme, gimme)
It's feelin' like you hot enough to melt, yeah (Melt, yeah)
Can't trust no one, can't even trust yourself, yeah (-Self, yeah)
And I love you, I don't love nobody else, yeah (Else, yeah)

[Pre-Chorus: Mac Miller & JID]
Tell them they can take that bullshit elsewhere (Yeah)
Self care, I'm treatin' me
Right, yeah
Hell yeah
We gonna be alright (We gon' be alright)

[Chorus: Mac Miller]
I switched the time zone (Yeah), but what do I know? (Yeah)
Spendin' nights hitchhikin', where will I go?
I could fly home (Yeah), with my eyes closed (Yeah)
But it'd get kinda hard to see, that's no surprise though
And you could find me (Yeah), I ain't hidin' (Yeah)
I don't move my feet when I be glidin'
I just slide in (Yeah) and then I roll
Out

[Interlude: Devonté Hynes]
Been on the road
I don't see it
Out on the road
I don't see where I'm going

[Verse 2: Mac Miller & JID]
Yeah, I been readin' them signs (Wow, yeah, yeah, yeah, yeah)
I been losin' my, I been losin' my, I been losin' my mind, yeah (Yeah)
Get the fuck out the way ('Kay), must be this high to play (Okay)
It must be nice up above the lights and what a lovely life that I made, yeah (Uh)
I know that feelin' like it's in my family tree, yeah (Woah)
That Mercedes drove me crazy, I was speedin'
Somebody save me from myself, yeah

[Pre-Chorus: Mac Miller]
Tell them they can take that bullshit elsewhere
Self care, we gonna be
Good
Hell yeah
They lettin' me go-o-o-o-o-o-o-o

[Chorus: Mac Miller]
I switched the time zone (Yeah), but what do I know? (Yeah)
Spendin' nights hitchhikin', where will I go? (Yeah)
I could fly home (Yeah) with my eyes closed (Yeah)
But it'd get kinda hard to see, that's no surprise though (Yeah)
And you could find me (Yeah), I ain't hidin' (Yeah)
I don't move my feet when I be glidin' (Yeah)
I just slide in (Yeah) and then I roll
Out

[Part II: Oblivion]

[Intro: Mac Miller]
I didn't know, I didn't know
I didn't know, I didn't know
Yeah, well
Didn't know what I was missin', now I see a lil' different
I was, thinkin' too much, got stuck in oblivion, yeah, yeah
Oblivion, yeah, yeah, oblivion, yeah, yeah
I got all the time in the world, so for now I'm just chillin'
Plus I know it's a, it's a beautiful feelin'
In oblivion, yeah, yeah, oblivion, yeah, yeah
Oblivion, yeah, yeah

[Verse: Mac Miller]
Yeah, okay, I ride around my city when I come home, yeah
The sun set quickly then get up slow, yeah
I disconnect and upload
Watch it spin around, we just spin it round, yeah
Let's go and travel through the unknown, yeah
We play it cool, we know we fucked though, yeah
You keep on sayin' you in love, so
Tell me, are you really down? Are you really down? Yeah
Let's go back to my crib and play some 45's
It's safer there, I know there's still a war outside
We spend our nights all liquored up, our mornings high
Can you feel it now?

[Outro: Mac Miller]
Oblivion, yeah, yeah
Oblivion, yeah, yeah, yeah, yeah, yeah, yeah, yeah
Oblivion, yeah, yeah, ooh-ooh, ooh-ooh
I got
All the time in the world, so for now I'm just chillin'
Plus, I know it's a, it's a beautiful feelin'
In oblivion, yeah, yeah, oblivion, yeah, yeah
Oblivion, yeah, yeah</h4>
        </div>
        );
    }
    
    else if (typeOf === "Image") {
        return(
        <div  className = "displayingContent">
            <img alt = "mac miller" className = "macMillerImg" src = {picOfMacMiller}></img>
        </div>
        );
    }
    else if (typeOf === '4') {
        return(
        <div>
        <img  alt = "mac miller" className = "sizertwo" src = {logo}></img>
        </div>
        );
    }


}
render() {
    var typeOf = this.props.typeOfDisplay;
    var theMacHack = this.typeOfDisplay(typeOf);
    return(<div>{theMacHack}</div>); 
  }
}
export default VidTextPic;
