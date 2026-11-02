# Visibilidade e medição — 2 de novembro de 2026

## Implementação no site

A medição funciona no configurador incorporado em tec-casa.pt. Depende de consentimento analítico válido e da ausência da exclusão de testes do Painel SEO. A aplicação incorporada não carrega etiquetas Google, nem utiliza cookies analíticos próprios: comunica eventos limitados à página principal, que valida a origem e o iframe antes de os enviar.

| Evento GA4 | Momento |
| --- | --- |
| `configurator_entry` | Clique num acesso ao configurador fora do Painel SEO |
| `configurator_open` | Aplicação incorporada aberta com análise permitida |
| `configurator_start` | Primeiro avanço válido no percurso |
| `configurator_step` | Primeira passagem por cada etapa nessa configuração |
| `configurator_submit` | Tentativa válida de envio da proposta |
| `generate_lead` | API confirma que o serviço de email aceitou o envio |
| `configurator_error` | Falha ou indisponibilidade no envio |
| `configurator_reset` | Recomeçar a configuração |

A confirmação do serviço de email não prova a entrega na caixa de entrada, um contacto comercial qualificado ou uma venda. Um erro não gera `generate_lead`. Reabrir a análise não reenvia a conversão.

Os parâmetros permitidos são nomes de etapas (`gate`, `dimensions`, `pillars`, `installation`, `extras`, `photos`, `contact`, `results`), tipo de portão, caminho público de origem e posição do acesso. Não são enviados nome, email, telefone, código postal, medidas, peso, fotografias, respostas livres, referência do pedido nem texto de erros. Os URL medidos excluem parâmetros de pesquisa.

O abandono é analisado pela diferença entre etapas; não é emitido um evento de abandono durante o fecho do browser. A etapa de cotas só se aplica aos portões de batente. Alterar campos ou regressar a uma etapa não multiplica a contagem dessa etapa; Recomeçar abre um novo percurso.

## Configuração pendente no Google Analytics

Requer acesso à propriedade da TecCasa. Marcar `generate_lead` como evento principal, sem o duplicar a partir de cliques ou da visualização da análise. Criar dimensões personalizadas de âmbito Evento para `configurator_step`, `gate_type`, `entry_page` e `entry_placement`. `page_path` e `method` seguem nos eventos quando aplicáveis. Verificar receção em Tempo real e só depois criar a exploração de funil: abertura, início, contacto, tentativa e pedido confirmado. Segmentar por tipo para analisar as etapas opcionais. Não ativar recolha de dados fornecidos pelos utilizadores nem personalização de anúncios para este trabalho.

Referências: https://support.google.com/analytics/answer/9267735 e https://support.google.com/analytics/answer/13128484

## Revisão técnica para Search Console

O mapa inclui 107 URL indexáveis e exclui 8 páginas legais. A nova página `/quanto-custa-automatizar-portao` fica no mapa e no Painel SEO. Tem ligações a partir da instalação geral e do configurador. Foi uniformizado o canonical da homepage e acrescentada uma ligação para a página inglesa de reparação de motores de garagem na reparação geral inglesa.

Esta revisão dos ficheiros publicados não substitui os dados do Search Console. Com acesso, analisar todo o período disponível e os últimos 28 dias: pesquisas, páginas, dispositivos e países; consultar os motivos de não indexação e os canonicals escolhidos pelo Google. Comparar impressões e cliques com contactos; não interpretar ausência de dados no lançamento como ausência de procura. Não repetir submissões manuais em massa nem prometer indexação.

## Google Business Profile — proposta pronta, não aplicada

Manter o nome público **TecCasa Soluções**; não acrescentar palavras-chave, localidades ou NIPC ao nome. A associação à razão social fica na descrição e no site. Confirmar a categoria principal já existente antes de alterar categorias; selecionar apenas categorias realmente disponíveis que descrevam os serviços prestados. Horários devem refletir o atendimento real e continuam por consultar.

Se não existe atendimento ao público na base, manter o perfil como empresa que se desloca ao cliente e ocultar a morada pública, preservando o endereço real exigido pelo Google. As duas bases de apoio não justificam criar perfis duplicados.

### Descrição proposta

A TecCasa Soluções instala, repara e presta assistência técnica a automatismos para portões de correr, de batente, seccionados e basculantes. Apoiamos particulares e condomínios em Lisboa e arredores, nas duas margens do Tejo. Pode falar diretamente com quem analisa e executa o trabalho. Avaliamos o portão, a utilização e as condições de montagem para propor uma solução adequada. Trabalhamos também com comandos, recetores e domótica. TecCasa Soluções é o nome comercial de ANDRE CORREIA - AUTOMATISMOS E SOLUÇÕES INTELIGENTES UNIPESSOAL LDA.

### Serviços a rever no perfil

| Serviço | Descrição sugerida |
| --- | --- |
| Instalação de automatismos para portões | Seleção e montagem de automatismos para portões de correr, de batente, seccionados e basculantes, conforme o portão e as condições da instalação. |
| Substituição de automatismos | Avaliação de motores antigos ou avariados e proposta de substituição adequada à utilização, com análise da compatibilidade dos acessórios existentes. |
| Reparação de portões automáticos | Diagnóstico de falhas de abertura, fecho, motor, central, comandos e dispositivos de segurança. Explicamos a intervenção antes de avançar. |
| Manutenção de automatismos | Verificação do funcionamento, movimento e acessórios do automatismo, com identificação de necessidades de afinação ou reparação. |
| Comandos e recetores | Fornecimento e programação de comandos e recetores compatíveis, após identificação do equipamento existente. |
| Domótica para portões | Avaliação de soluções de controlo pelo telemóvel e integração com equipamentos compatíveis. |

Para rever as áreas sem omitir as localidades abrangidas, considerar concelhos reais de atuação: Lisboa, Loures, Odivelas, Vila Franca de Xira, Amadora, Sintra, Oeiras, Almada, Seixal, Barreiro, Moita, Montijo, Alcochete e Benavente. A escolha final depende das áreas atuais do perfil e da cobertura efetiva; listar áreas não garante classificação em cada uma.

Fotografias de trabalhos reais e avaliações autênticas dos clientes podem reforçar o perfil. Não foram publicadas imagens, avaliações, respostas ou publicações neste trabalho.

Referências: https://support.google.com/business/answer/3038177 e https://support.google.com/business/answer/9157481
