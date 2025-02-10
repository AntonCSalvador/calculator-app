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

  const test = (appenderAnswer: string) =>{
    setAnswer((prevAnswer) => [...prevAnswer, appenderAnswer]);
    console.log("answer ", answer);
  };

  let content;
  switch (number) {
    case 1:
      content = (
        <div className="text-[#f77e85] items-center">
          <h1 className="text-2xl font-pacifico">HI RIA</h1>
          <img className="w-full h-auto" src="https://media.tenor.com/PJ4-hzHhDyEAAAAM/hi-hey.gif"/>
          <h1 className="text-2xl font-pacifico">HAPPY RIATINES DAY 🤪</h1>
          <button className="bg-red-100" onClick={update}>CLICK ME</button>
        </div>
      );
      break;
    case 2:
      content = (
        <div className="text-[#f77e85] items-center">
          <h1 className="text-2xl font-pacifico">Will you be my valentine?</h1>
          <img className="w-full h-auto" src="https://media.tenor.com/l9Qh626faNgAAAAM/puss-in-boots-shrek.gif"/>
          <button className="bg-red-100" onClick={update}>Yes</button>
          <button className="bg-red-100" onClick={update}>Definitely</button>
          <button className="bg-red-100" onClick={badEnding}>Definitely Not</button>
        </div>
      );
      break;
    case 3:
      content = (
        <div className="text-[#f77e85] items-center">
          <h1 className="text-2xl font-pacifico">LETS GOOO</h1>
          <img className="w-full h-auto" src="https://y.yarn.co/09e889d0-6995-4bbe-a2a5-13a65af04796_text.gif"/>
          <button className="bg-red-100" onClick={update}>Click here</button>
        </div>
      );
      break;    
    case 4:
      content = (
        <div className="text-[#f77e85] flex flex-col items-center min-h-screen py-4">
          <img className="w-full h-auto mb-4" src="https://media0.giphy.com/media/l3q2tzon8OCC7BqmY/200w.gif?cid=6c09b9522yvlapddan8800ji2ivc1qkshwg86pa143xwug7b&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
          <h1 className="text-2xl font-pacifico text-center mb-4">What do you want to do on Friday?</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-4">
            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://i.guim.co.uk/img/media/53daacc73fcf9fed5aabb136f973619c7914b00c/0_114_2250_1350/master/2250.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=406fa64d21510d5778f4e76cced44675" alt="10 things" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              
              <div className="flex items-center gap-2">
                <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                <span>Watch 10 Things I Hate About You</span>
              </div>

            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="public/plaza.png" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                <span>Painting in Central Park</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://i.pinimg.com/736x/21/0f/d9/210fd9b618d4063e30486c594f7004df.jpg" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                <span>Baking Something CRAZY</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://blog.frame.io/wp-content/uploads/2022/08/mif-the-bear-dream-sequence.jpg" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                <span>COOKING DINNER TOGETHER (no aprons)</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://foodisafourletterword.com/wp-content/uploads/2020/12/Ponyo_Ramen.gif" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                <span>GET FOOD SOMEWHERE but not ponyo ramen :(</span>
              </div>
            </label>

            <label className="flex flex-col items-center text-center text-[#f77e85]">
              <img src="https://media.tenor.com/JedGbYMYv-MAAAAM/timothee-chalamet-timoth%C3%A9e-hal-chalamet.gif" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
              <div className="flex items-center gap-2">
                <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                <span>CLUBBING PUSH</span>
              </div>
            </label>

          </div>
          <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>Click here</button>
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
                <img src="https://i.guim.co.uk/img/media/53daacc73fcf9fed5aabb136f973619c7914b00c/0_114_2250_1350/master/2250.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=406fa64d21510d5778f4e76cced44675" alt="10 things" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                  <span>Semi-Ponyo Themed</span>
                </div>
  
              </label>
  
              <label className="flex flex-col items-center text-center text-[#f77e85]">
                <img src="public/plaza.png" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                  <span>Joke gift</span>
                </div>
              </label>
  
              <label className="flex flex-col items-center text-center text-[#f77e85]">
                <img src="https://i.pinimg.com/736x/21/0f/d9/210fd9b618d4063e30486c594f7004df.jpg" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                  <span>COMICALLY BIG GIFT THAT IS ACTUALLY CRAZY BUT WE CAN SAVE IT FOR A DIFFERENT OCCASION</span>
                </div>
              </label>
  
              <label className="flex flex-col items-center text-center text-[#f77e85]">
                <img src="https://blog.frame.io/wp-content/uploads/2022/08/mif-the-bear-dream-sequence.jpg" alt="Painting" className="w-24 h-24 object-cover mx-auto mb-2 sm:w-24 sm:h-24" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" value="Movies" onChange={handleOptionChange} className="mr-2 accent-[#f77e85]" />
                  <span>This is from the A24 pass and I saw it and thought of you</span>
                </div>
              </label>
  
            </div>
            <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>Click here</button>
          </div>
        );
        break;

        case 6:
          content = (
            <div className="text-[#f77e85] flex flex-col items-center min-h-screen py-4">
              <h1 className="text-2xl font-pacifico text-center mb-4">Thank you for being the greatest girlfriend of ALL TIME</h1>
              <img className="w-full h-auto mb-4" src="https://media.tenor.com/fCuik1ZJIh0AAAAM/hug-ponyo.gif"/>
              <h1 className="text-2xl font-pacifico text-center mb-4">Thank you for being the greatest girlfriend of ALL TIME</h1>
      
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-4">
              </div>
              <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>Click here</button>
            </div>
          );
          break;
          case 7:
            content = (
            <div className="text-[#f77e85] flex flex-col items-center min-h-screen py-4">
              <h1 className="text-2xl font-pacifico text-center mb-4">Thank you for being the greatest girlfriend of ALL TIME</h1>
              <img className="w-full h-auto mb-4" src="https://media.tenor.com/fCuik1ZJIh0AAAAM/hug-ponyo.gif"/>
              <h1 className="text-2xl font-pacifico text-center mb-4">Thank you for being the greatest girlfriend of ALL TIME</h1>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-4">

      
      
              </div>
              <button className="bg-red-100 mt-4 px-4 py-2 rounded border-2 border-[#f77e85]" onClick={update}>Click here</button>
            </div>
          );
          break;

    case 100:
      content = (
        <div className="text-[#f77e85] items-center">
          <h1 className="text-2xl font-pacifico">PLEAAAAASEEEEEEE GO BACK AND SAY YES</h1>
          <div>
            <img className="w-full h-auto" src="https://media.tenor.com/XhK036RdGdUAAAAM/jerry-beg.gif"/>
            <img className="w-full h-auto" src="https://gifdb.com/images/high/begging-pikachu-kuibtuzz5vturb0v.gif"/>
          </div>
          <button className="bg-red-100" onClick={() => {backToStart()}}>GO BACK</button>
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
