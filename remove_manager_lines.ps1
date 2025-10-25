# Script para remover todas as linhas que contêm "manager": do arquivo projectsData.js
$inputFile = "D:\apps\pages\doc_ia_na_uffs\js\projectsData.js"
$outputFile = "D:\apps\pages\doc_ia_na_uffs\js\projectsData_temp.js"

# Ler todas as linhas do arquivo
$lines = Get-Content $inputFile

# Filtrar linhas que NÃO contêm '"manager":'
$filteredLines = $lines | Where-Object { $_ -notmatch '^\s*"manager":' }

# Escrever as linhas filtradas no arquivo temporário
$filteredLines | Set-Content $outputFile

# Substituir o arquivo original
Remove-Item $inputFile
Move-Item $outputFile $inputFile

Write-Host "Removidas todas as linhas com 'manager:' do arquivo projectsData.js"