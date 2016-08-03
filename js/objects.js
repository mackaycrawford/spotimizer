sampleData = {
  "daypartMix": [{'am': "10", 'md': '10', 'pm': '10', 'ev': '10', 'wk': '10'}] , 
  "stationBudgets": {'station1': '10000', 'station2': '10000'}, 
  "avails": [
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}, 
      {'station': "ABC", 'program': "meet the press", 'rating': '1.2', 'daypart': 'am', 'cost': '7000'}
      ]
}

processObject = function(){
    outputObject = {"daypartMix": {"goal": {"am": null, "md": null, "pm": null, "ev": null, "wk": null}, "actual": {"am": null, "md": null, "pm": null, "ev": null, "wk": null}}}
    inData = assembleInputData()
    outputObject.daypartMix.goal.am = inData.inputDaypartMix[0][0]
    outputObject.daypartMix.goal.md = inData.inputDaypartMix[0][1]
    outputObject.daypartMix.goal.pm = inData.inputDaypartMix[0][2]
    outputObject.daypartMix.goal.ev = inData.inputDaypartMix[0][3]
    outputObject.daypartMix.goal.wk = inData.inputDaypartMix[0][4]
    outputObject['stationMix'] = {"goal": {}, "actual": {}}
    sbRaw = inData.inputStationBudget
    sbRaw.pop()
    for(var i=0; i<sbRaw.length; i++){
        sbRaw[i].pop()
    }
    sbRaw = _.object(sbRaw)
    outputObject.stationMix.goal = sbRaw
    return outputObject
}

