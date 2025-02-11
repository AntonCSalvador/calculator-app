import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [answer, setAnswer] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      setSelectedOptions((prev) => prev.filter((item) => item !== value));
    }
  };

  const update = () => {
    setNumber((prevNumber) => prevNumber + 1);
    console.log("hello" + (number + 1))
  };

  const badEnding = () => {
    setNumber(100);
    console.log("NOOOOO")
  };

  const backToStart = () => {
    setNumber(2);
    console.log("back to start");
  };

  const backToStartFr = () => {
    setNumber(1);
    console.log("back to start");
  };

  const test = (appenderAnswer: string) =>{
    setAnswer((prevAnswer) => [...prevAnswer, appenderAnswer]);
    console.log("answer ", answer);
  };

  let content;
  switch (number) {
    case 1:
      content = (
        <div className="text-[#f77e85] items-center flex flex-col justify-center text-center px-4 py-8">
          <h1 className="text-4xl font-pacifico mb-4">HI RIA</h1>
          <img className="w-full h-auto" src="https://media.tenor.com/PJ4-hzHhDyEAAAAM/hi-hey.gif"/>
          <h1 className="text-2xl font-pacifico mt-4">HAPPY RIATINES DAY 🤪</h1>
          <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>CLICK ME!</button>
        </div>
      );
      break;
    case 2:
      content = (
        <div className="text-[#f77e85] items-center flex flex-col justify-center text-center px-4 py-8">
          <h1 className="text-4xl font-pacifico mb-4">Will you be my valentine?</h1>
          <img className="w-full h-auto" src="https://media.tenor.com/l9Qh626faNgAAAAM/puss-in-boots-shrek.gif"/>
          <div className="flex items-center gap-2">
            <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>Yes</button>
            <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>DEFINITELY</button>
            <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={badEnding}>Definitely Not</button>
          </div>
        </div>
      );
      break;
    case 3:
      content = (
        <div className="text-[#f77e85] items-center flex flex-col justify-center text-center px-4 py-8">
          <h1 className="text-4xl font-pacifico mb-4">LETS GOOO</h1>
          <img className="w-full h-auto" src="/cameron.gif"/>
          <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>PLAN TIME</button>
        </div>
      );
      break;    
    case 4:
      content = (
        <div className="text-[#f77e85] flex flex-col items-center min-h-screen py-4">
          <img className="w-full h-auto mb-4" src="https://media0.giphy.com/media/l3q2tzon8OCC7BqmY/200w.gif?cid=6c09b9522yvlapddan8800ji2ivc1qkshwg86pa143xwug7b&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
          <h1 className="text-4xl font-pacifico text-center mb-4">What do you want to do on Friday?</h1>
          <h1 className="text-2xl font-pacifico text-center mb-4">(If you want me to pick just pick anything and we can talk about it later)</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-4">
            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://i.guim.co.uk/img/media/53daacc73fcf9fed5aabb136f973619c7914b00c/0_114_2250_1350/master/2250.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=406fa64d21510d5778f4e76cced44675" alt="10 things" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              
              <div className="flex items-center gap-2">
                <input type="checkbox" value="movies" onChange={handleOptionChange} checked={selectedOptions.includes("movies")} className="mr-2 accent-[#f77e85]" />
                <span>Watch 10 Things I Hate About You</span>
              </div>

            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="/plaza.png" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="painting" onChange={handleOptionChange} checked={selectedOptions.includes("painting")} className="mr-2 accent-[#f77e85]" />
                <span>Painting in Central Park</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://i.pinimg.com/736x/21/0f/d9/210fd9b618d4063e30486c594f7004df.jpg" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="baking" onChange={handleOptionChange} checked={selectedOptions.includes("baking")} className="mr-2 accent-[#f77e85]" />
                <span>Baking Something CRAZY</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://blog.frame.io/wp-content/uploads/2022/08/mif-the-bear-dream-sequence.jpg" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="cooking" onChange={handleOptionChange} checked={selectedOptions.includes("cooking")} className="mr-2 accent-[#f77e85]" />
                <span>COOKING DINNER TOGETHER (no aprons)</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://foodisafourletterword.com/wp-content/uploads/2020/12/Ponyo_Ramen.gif" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="takeout" onChange={handleOptionChange} checked={selectedOptions.includes("takeout")} className="mr-2 accent-[#f77e85]" />
                <span>GET FOOD SOMEWHERE but not ponyo ramen :(</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://media.tenor.com/JedGbYMYv-MAAAAM/timothee-chalamet-timoth%C3%A9e-hal-chalamet.gif" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="clubbing" onChange={handleOptionChange} checked={selectedOptions.includes("clubbing")} className="mr-2 accent-[#f77e85]" />
                <span>CLUBBING PUSH</span>
              </div>
            </label>

          </div>
          <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>PLANS LOCKED (not really)</button>
        </div>
      );
      break;    

      case 5:
        content = (
          <div className="text-[#f77e85] flex flex-col items-center min-h-screen py-4">
            <img className="w-full h-auto mb-4 ml-4 mr-4" src="https://media.tenor.com/fCuik1ZJIh0AAAAM/hug-ponyo.gif"/>
            <h1 className="text-2xl font-pacifico text-center mb-4">Which gift do you want?</h1>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-4">
              <label className="flex flex-col items-center text-center text-[#f77e85]">
                <img src="https://pbs.twimg.com/media/Fkn4jc9VEAEslul.jpg" alt="idk" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="ponyo" onChange={handleOptionChange} checked={selectedOptions.includes("ponyo")} className="mr-2 accent-[#f77e85]" />
                  <span>Semi-Ponyo Themed Small Thing</span>
                </div>
  
              </label>
  
              <label className="flex flex-col items-center text-center text-[#f77e85]">
                <img src="https://sm.ign.com/t/ign_za/review/j/joker-revi/joker-review_xbj7.1024.jpg" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="joke" onChange={handleOptionChange} checked={selectedOptions.includes("joke")} className="mr-2 accent-[#f77e85]" />
                  <span>Joke-ish gift</span>
                </div>
              </label>
  
              <label className="flex flex-col items-center text-center text-[#f77e85]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxMJRrWQcQ4Gn2v8EQTXxn5hQIwVsDhb8RA&s" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="ladybird" onChange={handleOptionChange} checked={selectedOptions.includes("ladybird")} className="mr-2 accent-[#f77e85]" />
                  <span>COMICALLY BIG GIFT THAT IS ACTUALLY CRAZY BUT WE CAN SAVE IT FOR A DIFFERENT OCCASION</span>
                </div>
              </label>
  
              <label className="flex flex-col items-center text-center text-[#f77e85]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8j1sjNg00cDonxtCVzATIBmzzUfhr_BPEg&s" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="a24" onChange={handleOptionChange} checked={selectedOptions.includes("a24")} className="mr-2 accent-[#f77e85]" />
                  <span>This is from the A24 pass and I saw it and thought of you</span>
                </div>
              </label>
  
            </div>
            <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>SANTA SAYS CLICK HERE</button>
          </div>
        );
        break;

        case 6:
          content = (
            <div className="text-[#f77e85] flex flex-col items-center min-h-screen py-4">
              <h1 className="text-2xl font-pacifico text-center mb-4">Thank you for being the greatest girlfriend of ALL TIME</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-4">
                <img className="w-full h-auto mb-4" src="/costume.jpg"/>      
                <img className="w-full h-auto mb-4" src="/tongue.jpg"/>      
                <img className="w-full h-auto mb-4" src="/pickleball.jpeg"/>      
                <img className="w-full h-auto mb-4" src="/sunrise.jpeg"/>      

              </div>
              <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>WOOOOO</button>
            </div>
          );
          break;
          case 7:
            content = (
            <div className="text-[#f77e85] flex flex-col items-center min-h-screen py-4">
              <h1 className="text-2xl font-pacifico text-center mb-4">Thats all I have</h1>
              <h1 className="text-2xl font-pacifico text-center mb-4">I WILL SEE YOU SOON</h1>
              <img className="w-full h-auto mb-4" src="https://31.media.tumblr.com/d0373cf4ac8f12009c20c684d8e1e2be/tumblr_mkekgj7ULd1qk48cjo1_500.gif"/>
              <h1 className="text-2xl font-pacifico text-center mb-4"></h1>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-4">

      
      
              </div>
              <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={backToStartFr}>BACK TO THE START</button>
            </div>
          );
          break;

    case 100:
      content = (
        <div className="flex flex-col items-center justify-center text-center text-[#f77e85] px-4 py-8">
          <h1 className="text-2xl font-pacifico mb-4">PLEAAAAASEEEEEEE GO BACK AND SAY YES</h1>
          <div className="w-full max-w-md">
            <img className="w-full h-auto object-contain" src="https://media.tenor.com/XhK036RdGdUAAAAM/jerry-beg.gif"/>
            <img className="w-full h-auto object-contain mt-4" src="https://gifdb.com/images/high/begging-pikachu-kuibtuzz5vturb0v.gif"/>
          </div>
          <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={() => {backToStart()}}>GO BACK</button>
        </div>
      );
  }


  return (
    <div className="flex bg-red-50 w-full h-full min-h-screen justify-center">
      <div className="relative justify-center">
        {content}
      </div>
    </div>
  );
  
}

export default App;
