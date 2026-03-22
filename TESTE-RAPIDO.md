# 🚀 Teste Rápido - 5 Minutos

## 1. Iniciar Servidor (30 segundos)

```bash
python -m http.server 8000
```

Abrir: http://localhost:8000

## 2. Verificar Console (30 segundos)

Pressionar **F12** e verificar se aparece:

```
🎨 Three.js Background Optimized
✨ Animations Optimized
⚡ Performance Optimizations Loaded
```

✅ **Se aparecer:** Tudo funcionando!  
❌ **Se não aparecer:** Limpar cache (Ctrl+Shift+Delete) e recarregar

## 3. Testar Animações (1 minuto)

- [ ] Background 3D aparece? ✅
- [ ] Partículas se movem? ✅
- [ ] Scroll é suave? ✅
- [ ] Mouse trail funciona? ✅

## 4. Lighthouse (2 minutos)

1. **F12** > **Lighthouse**
2. Selecionar: **Performance**
3. **Generate Report**

**Meta: 85+ score** ✅

## 5. Testar Mobile (1 minuto)

1. **F12** > **Toggle Device** (Ctrl+Shift+M)
2. Selecionar **iPhone** ou **Galaxy**
3. Recarregar página

**Verificar:**
- [ ] Animações suaves? ✅
- [ ] Sem lag? ✅

## ✅ Pronto!

Se tudo passou, o site está **100% otimizado** e pronto para deploy!

---

## 🐛 Problemas?

### Animações não aparecem
```bash
# Limpar cache
Ctrl+Shift+Delete

# Testar em modo anônimo
Ctrl+Shift+N (Chrome)
```

### Performance baixa
Já está otimizado automaticamente! Se ainda estiver lento:
1. Verificar se está em modo low-end
2. Reduzir `particleCount` manualmente em `three-background-optimized.js`

### Erros no console
Verificar se todos os arquivos estão presentes:
- [ ] three.min.js
- [ ] three-background-optimized.js
- [ ] animations-optimized.js
- [ ] performance-optimizations.js

---

**Tempo total:** 5 minutos ⏱️  
**Dificuldade:** Fácil 😊
