
window.onload = function()
{
    
// const
    const pi = 3.142;

    function calcArea(r)
    {
        const pi = 10;
        console.log(pi);
        console.log("The area is:" + pi * r * r);
    }
    console.log(pi);
    calcArea(5);


    //let
    var items = document.getElementsByTagName("li");

    for(let x = 0; x < items.length; x ++)
    {
        items[x].onclick = function()
        {
            console.log("with let:" +x);
        }
    }

    /*for(var y = 0; y < items.length; y ++)
    {
        items[y].onclick = function()
        {
            console.log("with var" +y);
        }
    }*/


    //Default Parameters
    function logMyself(name="idiot",league="probably bronze",age=77)
    {
        console.log("My name is " + name+ " and i'm currently ranked "+league+" at "+age+" years old");
    }

    logMyself("Gwendal","diamond",23);
    logMyself();

    //The Spread Operator

    var nums1 = [1,2,3];
    var nums2 = [...nums1,4,5,6];
    console.log(nums2);

    var nums = [3,5,7];
    function addNums(a,b,c)
    {
        console.log("Addition d'un array :" + (a+b+c));
    }

    addNums(...nums);


    //Template Strings

    function logMe(unNom, unAge)
    {
        console.log(`My name is ${unNom} 
          and my age is ${10 + 13}`);
    }
    logMe("Gwendal", 23);

    //Object literal enhancements

    var name ="Crystal";
    var league = "Diamond";

    var leaguePlayer = {
        name, league,
        flame(yup)
        {
            console.log(`You flamed those bonobos ${yup} times`)
        }
    };
    leaguePlayer.flame(5);

    //New String Methods

    var str = "flaaaaaaame";
    //repete
    console.log(str.repeat(5));
    //return bool
    console.log(str.startsWith("fla"));
    console.log(str.startsWith("la",1));
    console.log(str.endsWith("me"));

    console.log(str.includes("am"));

    //Arrow Functions
    // var ninjaGreeting = () => console.log("");
    // ninjaGreeting();
    var test = {
        name: "Test",
        chop(same){

            window.setInterval(() =>
            {
                if(same > 0)
                {
                    console.log(this.name + `chopped the tree. 
                    The tree is ${same} feet left`);
                     if(same==1)
                    {
                        console.log("the tree is chopped");
                    }
                    same--;
                }
    
            }, 1000);
        }
    }

    test.chop(5);


    //Sets

    var desNoms = new Set();

    desNoms.add("Gwendal").add("Florian").add("Samuel");
    desNoms.delete("Florian");
    //desNoms.clear();
    //return bool
    console.log(desNoms.has("Gwendal"));
    console.log(desNoms.size);

    console.log(desNoms);

    var arrayNom = ["Gwendal","Florian","Sam","Gwendal"];
    var refinedNoms = new Set(arrayNom);
    console.log(refinedNoms);
    arrayNom = [...refinedNoms];

    console.log(arrayNom);


    //Generators

    function* gen()
    {
        var value1 = yield "pear";
        var value2 = yield "banana";
        var value3 = yield "apple";
        return "all done";
    }

    var myGen = gen();
    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());

}

