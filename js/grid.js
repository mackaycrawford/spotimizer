  $(document).ready(function() {

    $daypartTable = $("#daypartTable");
    $daypartTable.handsontable({
      data: sampleData.daypartMix,
      rowHeaders: ['goal', 'actual'],
      colHeaders: _.keys(sampleData.daypartMix[0]),
      contextMenu: false,
      minSpareRows: 1,
      maxRows: 2

    });

    $stationBudgetTable = $("#stationBudgetTable");
    $stationBudgetTable.handsontable({
      data: _.pairs(sampleData.stationBudgets),
      rowHeaders: false,
      colHeaders: ["Station", "Goal Budget Percent", "Actual Budget Percent"],
      contextMenu: false,
      minSpareRows: 1,
      minSpareCols: 1,
      maxCols: 3
    });

    $availsTable = $("#availsTable");
    $availsTable.handsontable({
      data: sampleData.avails,
      rowHeaders: false,
      colHeaders: ["Station", "Program", "Daypart", "Rating", "Cost"],
      contextMenu: false,
      minSpareRows: 1
    });
    
    
    getTableData = function(whichTable){
        return whichTable.handsontable('getData')
    }
    
    assembleInputData = function(){
        dpTable = getTableData($daypartTable)
        sbTable = getTableData($stationBudgetTable)
        avTable = getTableData($availsTable)
        outObject = {
            inputDaypartMix: dpTable, 
            inputStationBudget: sbTable, 
            inputAvails: avTable
        }
        
        return outObject
        
    }
    

  })
