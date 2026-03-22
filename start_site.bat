@echo off
title KT Optimizer - Local Server
echo ==========================================
echo    KT OPTIMIZER - INICIANDO SITE LOCAL
echo ==========================================
echo.
echo Tentando abrir o navegador em http://localhost:3000...
start http://localhost:3000
echo.
echo Iniciando o servidor... (Pressione Ctrl+C para parar)
npx -y serve -p 3000 .
pause
