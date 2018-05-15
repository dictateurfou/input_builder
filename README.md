# input_builder
For make form and return result in you Clientevent (fivem) , modify css for change style


usage in client script

for Call
`
    exports.input_builder:multipleInput("TITLE","youClientScript:Event",{{["name"] = "time",["type"] = "number"},{["name"] = "reason",["type"] = "textarea"},{["name"] = "money", ["type"] = "number"}},arg)
`
For recept
`
AddEventHandler('youClientScript:Event',function(arg,rslt)
exemple for rslt
rslt.time
rslt.reason
rslt.money

arg = You argument when Called input builder
	
end)
`
