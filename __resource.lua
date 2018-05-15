client_script 'client.lua'

ui_page('index.html')

files({
    'index.html',
    'script.js',
    'style.css'
})


exports {
    'InputNumber',
    'multipleInput',
}