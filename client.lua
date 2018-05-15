-- exports.menu_builder:InputNumber(titre,resource,action,arg)

function InputNumber(titre,resource,action,arg)

	SendNUIMessage({
       titre = titre,
       resource = resource,
       action = action,
       arg = arg,
	})
	SetNuiFocus(true, true)

end

local function sendnotif(message)
    SetNotificationTextEntry("STRING")
    AddTextComponentString(message)
    DrawNotification(0,1)
    
end

function multipleInput(titre,action,tab,arg)
	SendNUIMessage({
		titre = titre,
		action = action,
		tab = tab,
		arg = arg,
		type = "multiple",
	})
	SetNuiFocus(true, true)
end


RegisterNUICallback('montant', function(data)  
  TriggerServerEvent(data.action,data.nombre,data.arg,data.resource)
end)

RegisterNUICallback('multiple', function(data)  
  TriggerEvent(data.action,data.arg,data.result)

end)

RegisterNUICallback('close', function(data)
    SetNuiFocus(false, false)
end)