import React, { useState, useEffect } from 'react';
import './App.css';
import Select from 'react-select';
import data from '../data/data.json';
import { nanoid } from 'nanoid';

function App() {
  interface data {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }
  const [choice, setUserChoice]: any = useState([]);
  let [myData, setMyData] = useState(data);

  //roles
  let myRoleOptions = data.map((item) => item.role);
  let optionsArray = [...new Set(myRoleOptions)];

  //levels
  let myLevelOptions = data.map((item) => item.level);
  let levelArray = [...new Set(myLevelOptions)];

  //language
  let languageOptions = data.map((item) => item.languages);
  let newArray = [];
  for (let i = 0; i < languageOptions.length; i++) {
    for (let j = 0; j < languageOptions[i].length; j++) {
      newArray.push(languageOptions[i][j]);
    }
  }
  let finalLanguageArray = [...new Set(newArray)];

  //tools
  let toolOptions = data.map((item) => item.tools);
  let newToolsArray = [];
  for (let i = 0; i < toolOptions.length; i++) {
    for (let j = 0; j < toolOptions[i].length; j++) {
      newToolsArray.push(toolOptions[i][j]);
    }
  }
  let finalToolsArray = [...new Set(newToolsArray)];

  //finalArray for all items
  const combinedArray = [
    ...optionsArray,
    ...levelArray,
    ...finalLanguageArray,
    ...finalToolsArray,
  ];
  console.log(combinedArray);
  const finalCombinedArray = Array.from(new Set(combinedArray));
  console.log(finalCombinedArray);

  const options = finalCombinedArray.map((item) => {
    return { value: `${item}`, label: `${item}` };
  });

  //flattening the data
  let newArrays = data.map((item) => {
    return [item.role, item.level, ...item.languages, ...item.tools];
  });
  console.log(newArrays);

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    let target = e.target as HTMLInputElement;
    console.log(choice);
    console.log(target.value);
    if (choice.length === 0) {
      setUserChoice([target.value]);
    } else {
      setUserChoice((prevChoice: string[]) => {
        return [...prevChoice, target.value];
      });
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log((e.target as HTMLInputElement).value);
    console.log(options);
    console.log(choice);
    let target = e.target as HTMLInputElement;
    for (let i = 0; i < options.length; i++) {
      if (target.value === options[i].value && choice.length == 0) {
        console.log('empty!');
        setUserChoice([options[i].value]);
        target.value = '';
      } else if (target.value === options[i].value && choice.length > 0) {
        if (
          target.value === options[i].value &&
          choice.includes(target.value)
        ) {
          window.alert('filter already exists');
        } else {
          setUserChoice((prevChoice: string[]) => {
            return [...prevChoice, options[i].value];
          });
        }
        console.log('not empty');

        target.value = '';
      }
    }
  }
  console.log(choice);

  useEffect(() => {
    let newIndicesArray = newArrays.map((item) => {
      if (
        choice.every((choice: string) => {
          return item.indexOf(choice) !== -1;
        })
      ) {
        if (item !== undefined) {
          return data[newArrays.indexOf(item)];
        }
      }
    });
    console.log(newIndicesArray);
    let finalArray = newIndicesArray.filter((item) => item !== undefined);
    console.log(finalArray);
    setMyData(finalArray);
  }, [choice]);

  function removeFilter(item: string) {
    console.log(item);
    console.log(choice);

    setUserChoice((prevChoice: string[]) => {
      return prevChoice.filter((removedOption) => removedOption !== item);
    });
  }
  return (
    <div className="App">
      <div className="top-section">
        <div className="searchBar">
          <div className="results-container">
            {choice.map((item: string) => {
              console.log(item);
              return (
                <div className="selection" key={nanoid()}>
                  <div className="selection-text">{item}</div>
                  <div
                    className="close-selection"
                    onClick={(e) => removeFilter(item)}
                  >
                    <img src="/images/icon-remove.svg" alt="remove filter" />
                  </div>
                </div>
              );
            })}
          </div>
          <input
            className="myInput"
            type="text"
            list="brow"
            placeholder="Filter Items..."
            onChange={(e) => handleInput(e)}
          />
          <div className="clear" onClick={() => setUserChoice([])}>
            Clear
          </div>

          <datalist className="myList" id="brow">
            {options.map((option) => {
              return <option value={option.value} key={nanoid()} />;
            })}
          </datalist>
        </div>
      </div>
      <div className="bottom-section">
        <div className="cards-container">
          {myData.map((item) => {
            return (
              <div
                key={nanoid()}
                className="card"
                style={{
                  borderLeft:
                    item.new && item.featured ? '8px solid #5ba4a4' : '',
                }}
              >
                <div className="left-card">
                  <div className="avatar-container">
                    <img
                      src={item.logo}
                      alt="company logo"
                      className="avatar"
                    />
                  </div>
                  <div className="info-container">
                    <div className="company-info">
                      <p className="company">{item.company}</p>
                      {item.new && (
                        <div className="newContainer">
                          <p className="new">New!</p>
                        </div>
                      )}
                      {item.featured && (
                        <div className="featuredContainer">
                          <p className="featured">featured</p>
                        </div>
                      )}
                    </div>
                    <div className="position">
                      <p className="position">{item.position}</p>
                    </div>
                    <div className="more-info">
                      <p className="day">{item.postedAt}</p>
                      <div className="fullstop"></div>
                      <p className="contract">{item.contract}</p>
                      <div className="fullstop"></div>
                      <p className="location">{item.location}</p>
                    </div>
                  </div>
                </div>
                <div className="right-card">
                  <div className="right-container">
                    <button
                      className="role"
                      value={item.role}
                      onClick={(e) => handleClick(e)}
                    >
                      {item.role}
                    </button>
                    <button
                      className="level"
                      value={item.level}
                      onClick={(e) => handleClick(e)}
                    >
                      {item.level}
                    </button>
                    {item.languages.map((item) => {
                      return (
                        <button
                          className="languages"
                          value={item}
                          onClick={(e) => handleClick(e)}
                          key={nanoid()}
                        >
                          {item}
                        </button>
                      );
                    })}
                    {item.tools.length > 0
                      ? item.tools.map((item) => {
                          return (
                            <button
                              className="tools"
                              value={item}
                              onClick={(e) => handleClick(e)}
                              key={nanoid()}
                            >
                              {item}
                            </button>
                          );
                        })
                      : ''}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
