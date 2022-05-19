---
title: 替NexT主題添加Gitalk留言區
date: 2022-5-18
categories: Tutorial
tags: 
- Hexo 
- NexT 
- OAuth 
- Tutorial
---
## 前言

每個想成為工程師的應該都要寫部落格。利用Hexo建立簡單的樣式的部落格，也可以發文章了，但如果少了留言板也就少了和人互動的機會，更甚如果自己文章哪裡有問題，別人也沒手段能幫助你修改

有鑑於可利用 DISQUS Facebook Gitalk 每種方法都擁好處和壞處，這次我利用 Gitalk 來與 Github Page 裡面的 Issue 來使用留言版功能

<!--more-->

## 環境參考


+ hexo: 5.4.2

+ hexo-cli: 4.3.0

+ NexT version 8.11.1


## 建立 Github OAuth APP

> 進入 setting 

<img src="https://lh3.googleusercontent.com/n83cCPxK41i2g61NC2RjwRWMXvP_aOzfzF_enFiiTYHV1VfD-ojJr10O5SseVEdaESiDF3aR4ll2y172Z-aMzYu2fZsKrZfVcoqU7yHrSTZDuBkNdYL8zan2kzrf_bv5YAXjrvmmmOYSvuNhW_tP6098EvmWVDNxaSs5l_U8TC47G-D1SF-WHSosNiDsLNYI8LXCyECdqJU_ABrJouBtLyb6RSFElYGR_MyLNmMhXVem23z95lXh2wCP716t6OBv0FYzmj7I8hOAO9Xh2PiBvLhvAVaSnupHXRbfSfYR4BvdfaewEBzgCvKJqzr7gkNEln6TxlZScmBX4lT7O8_3QZb4I2VIPsyAhzg7udiyCIPQ9KdJoYr9m96N4FQNRa4oxZxVMhsfMt5hq0geA6Xfvh3ZIkKHzhsmaOf7iJjd6XSN89v9lkA5LA-M9Vn8dCylbYJwuab4OLaVszooX7Vs_qXxG4TPNs1uoynhBiz13wis3O2dLWTwdI9XJIKQa7eFdDeOLPEoV_Jgh7w1qewWgmyWIrz6Sx3hkOgVF0BRl7SiG14rFilGA-NlpXV0-BqWp7kseSWH8mf-Ss-O194b3-oMX7ywpR3MhASR9mxo0x8eUWx_Dk_3c2lWpM2MvzManPNG5dAO_czHCJJhGu3gZCzGXCCH0TRCU9ey6LoH0760Pey0x-ErvmJB7wPi7icLWX-_xv2dhgie5n_mymQiY6x35MJHbcIYhBijD7Wnfw3fXhlrJbdHKxGCVeg=w603-h762-no?authuser=0" width="800px" />



> 在左下找到 Developer settings

<img src="https://lh3.googleusercontent.com/AznIqsUKc76faI0LF7J2j-caXbkxjZHIoYjI1gn4e5ptikMGUgvVcCRWKyJIE_qqYTi-WZKsHIxgFSYC4dOlUOV7O0BFsUzYj-O5UkMkmSskumqfXzp3_6jhpxceInu9nJheExk_UF94BBSvsANsLhgV53l7KCVU_YP2yAshrFGPFUMfTuJufU_vA5bbxIJycJNDiCIB8Wzc6gen4KF0RePKJreaOTBukVVFSHVhdoGUd3Rcimv1DN10fCHnheLQapVuInTn_Al8b1IbFTk2gFyosL3AVrx0MMjlsyQIUNjuxcDAYLLknmm2cac1Zcfxb1vnNIwTzuRJ-oPXcFP0A7BtZ0CpQ-ubIpeD7bVQDx2fb1X8-IiB5R5KxvuR97pSUbuOG6btlnvBCTlxyK9DL-WoCbwkfXuP5YWxrlwCMwFDLHi0PoOsH_QeJ7b55Br2D2HitA9GlzGp3IxTapsBstsH55cRz6tTZ85YhIausTQzCDUnz9TXRgt_RLgKcTiPu6XQfwnnSIRq12rlJir-GX5TXB5sTL75_6pJ2fR2_U73boLwRnmBPKX-ITUFT45YmN6ERQbixA_M75rQ4n65OThESDhWYuOAHvgAaxWOwBCy32P1nZ3GA7dVg8RPixV2enH8olD97Aa-cOGjpPQPoWbYh77IABGW2GebFAp2ecu-G2HxzcOST7vyhq3EOvj_OVwAPw9AGzsOJKD8cFqrcCxVhwS8kDZXwQIsyaS2cFYaB1dm0CKjXmIoGU4=w745-h762-no?authuser=0" width="800px" />



> 左側的 OAuth Apps -> New Github App

<img src="https://lh3.googleusercontent.com/tDlYkWnB0VRf4LYb_BUgNCp2ru_ejsVqi2vbG-L9Z16zraDUvt26WXBDCJGhuEP57eKeXWQgbB5iC0bYIDIWZUFBmlBcGj4nEi5QmhY975xVcpumBpDvjfaEBKBI20Jas85HzPQY-A3nswi7hgFrtyjTrt12yC7H-zX4Djctb3r4Pp8q5HXZ-qTS8gef2Cj5b7I_WT9nq_xQiG9Q6nth2-wjYVUIas7ncScvtzu52VL5juIvQsQ47FSS7RxwNaT6Ucr8vrjtBIcLoD505c6H0SBc0SQFc3dUqi2SkjaHfRpLaPI7QbkokMAdcZOIwd4vUy_xZyRqmBw5y0RBpx6-Cbz6A-6RTepcv42NBDjqBINgcCWaVOvVe9vJAO4niBPisMRNuE1-2VA3wSbFmJIKMjpHrfJZ48bO8ZSEqb-jbprdo3_qAmSgXZAEGsA_UviHPUtSU2jF8C6DFJGaYDW63YEjItxNBJdsIA3nss9SBEFeyMl4wzsVtjwYUznAVTISFhNOUXY3SsKtcLr5mQZ2qa8f_XnhcFH2tHahnoFY-gJxEdIU6WCet4l7PSoZJNRXjCKayYIQ1eWD1v_T1JArxYzz4ZeBJDrcIq6KoWM5MGAPCGGDge9revZg79FW-4J5MPxl5eF_MZ_75s2CYq9BCkH53-5kj1snSduSTzqdN1c442ACnS_m1vQLu1LCd0U_lW3qQ2HsveZg1k2DT7oXLO00O5BTlr8s6x30U_fnlu1Yn9Hr70dZBW3prRk=w904-h265-no?authuser=0" width="800px" />




> 1. App 的名稱
> 2. 你的網址名稱
> 3. APP描述，可自定義
> 4. 授權回應網址，和 2輸入一樣即可
> + 好了就按 Register application

<img src="https://lh3.googleusercontent.com/YqUnHUIZm4Swni9MGQ8Q5qV6MALAmOD7W0fGs_sex6jUWO0C3wVM6DOqasDUh254_k155PNjDZjqu8LxjevH58x8mUEKd7Rv1l9ONQei-X_NUoT7plwEA3FvGPvDpiWGF_GAExiKrLDlGuaWFpt6eeDQjAEuUf01umZxTHP3zZVoJZr1jsjQxPwRtHECXbnybAvlBUD0HzRhgQ2j72iqAL4OiQWLtgzh8UaL_rEKaM31DxQ5k1xG-9Dnru2RNhcPUoVpuNp26r1DdHHnbJplN70qpVFcZo92OPyaxMIWa7NbFUjgGhQSRyTA3MXFwnErUyNHxgD2qEPHk20I9_MYn6a1pzlegHLcuzMc3-ouwhZl48j3nHgalgdLM2YadJsurKicY3RMSw8N2fCdrr91YHy7hsvj14GZmGBCjkn622SCqSUNWVZXH045TSzfk-jqhxvvl9qpaEn8T13y9lSAzSjl_gL0C3BifuNoIDBdbXdBHlTqOrCZz9LKeFDwlfQnwJyG4mmTjJoQEk4TYZErKrtwOnlj-66Iis7tVwTZipLL3SO7XMMsHdMnFbet7qCi9BZLILZ8CePJ8lAe7viO_t6pEhDFtlgO6d7McrKayxPZEJZtLQnIwPC985OfSmwZ9z7Ak3FMcuo9zUPH_yF2XZLK03b-wibtiuL2VJ8mj1CE51PRuQgcTWc0DQLJStFxrLZdbq7crybjpeLdTJyKXBB1sft1fDjdn9a9tZk_62jWVQzGcKfUysmSsvc=w842-h762-no?authuser=0" width="800px" />



> 確認 Client ID 並產出密鑰

<img src="https://lh3.googleusercontent.com/QlFRVkCF_R-R_RGLB2beCl5FddQRFtXQUTE18GgQ_eeKwO4Laaxa57XJK0c1Aq6z9JDtPoEp2DLzCwoVWng9SHX2XC-mGuPAnCVDqtUxME9f-g-FWb0pclSUayzr8jUHj43y5j2GvMotYHPmskGjAIBvCV3XJ0l0uEYoXcTlNDRO_5_ZNtTmJKg6I3rRUYQ_K5g7Qp3TK0rY8HzF64HfDoNdyK4K70GyNWlwWrX_dKqpEfvKVPR2E-b6mZ7vchfnlgRKkZbDYkJRTgOB2HcQaqQstlPEB24VQMX_aESPyVQUABKIKbMcXN_hTFSVFEHbPHjCoAITMyZvTT42vyQ6SYHEUQoFG3ID23oWUuboDsJwUy8ZjEe3Qwy7MLpCzeLEDHiAhmFdaxJzdD6pYWiREpnrhEU0Pyquj1BvQkOs3WWaj02w_tXk1n-5cCAq_Rt5l4WNUsId3SahVZxsSObjgACO-F2Iwv2Z3kuELLmNaDLlDwqMSWKtEj-OaT4FNpr9OIhiPX1zALtcf26gd53atQUSHT-SZN_c87hV2bH1S1r_a9-hpLPIc8usLRiG2S9DEzUHpBUMe9N5q0lVXTxwjwsZv8JR6XmzxBMM3NYniS3Ei8UAVv9t2K4k2SruB5pfakmAAedi8HOR7TQideD1Pw49lYQXnV7QIe5M-7bVLd4WhIBFq_j-_VR_qOspMQQOZIhjDyiJ19sVS-mTW0MLw_mtIgW89cS2hkE_uQpZc_DH65A2IEQA2uQoHHw=w904-h341-no?authuser=0" width="800px" />

到這裡 OAuth 基本上就好了，先把 Client ID 和密碼保存下來，之後會在再用到



## NexT的環境設置


進入 `你Blog的資料夾裡 -> theme -> next -> _config.yml`，尋找以下設置參數

每個參數大概的意思會是這樣

```yml
# Gitalk
# For more information: https://gitalk.github.io
  gitalk:
    enable:                 # 啟動 Gitalk (填 true
    github_id:              # 你要串聯的 Github帳號
    repo:                   # Repo名稱，你要連接的庫名
    client_id:              # 你申請的 Client ID
    client_secret:          # 你申請的 Client Secret
    admin_user:             # 管理者ID，建議和Github ID一樣
    distraction_free_mode:  # 無干擾模式 (填 true
    proxy:                  # 使用系統給的預設值，不用做更改
    language:               # 可以用以下幾個: en, es-ES, fr, ru, zh-CN, zh-TW
                            # zh代表中華(ZhongHua)，TW 就台灣
```

把你剛才申請的 Client ID & Secret 給填上去後

大概會長這樣
```yml
gitalk:
    enable: true
    github_id: Jack123
    repo: JikeLuo.github.io 
    client_id: 0xxx26a8xxx997xxx21e
    client_secret: 7xxx81dd42xxx9702xxx7e67xxx6028aaf5xxx68a
    admin_user: Jack123
    distraction_free_mode: true
    proxy: https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token
    language: zh-TW 
```



## 啟用

第一次使用時需要啟用Issue，他會說連接不到 Issue，只要登入Github來啟用就好

<img src="https://lh3.googleusercontent.com/dmQtbllZD9YiyJTlQ9Ys4S5MkByXDoMBfY3YT4ObWpAcSNJpVSbTPt7eCyzErhPeZFaFG32gE1bYx7ZuohS4QECtQlxCQPGKXXQCmqhwtSstDLbqnchj-Amefc10m_-5hxyCGUAc3LsLjPxCWDRKC3v9AXDf5RcjGkOsUwo6iWLRW_lzxA_ZxeEmhHr4PNL7mbAsEZ1ChcHV1-sAy74DxPeuH1QAg7sYzL1WxUNfUP0N1CDzu-cL_enCqejr6qcCaguGtHgF06hC5JB9_jrinvEPaxcB0y7PteuMqPV9hQgM_KvXgJ9dDe3T8_Gi820eIlvelG81lKRUDRGH1-b3h-7V9SJRTlsvkO1v-enDxn_YsFAzfdPI5WnMO9oQLoV_4-XDZkD8RLVYwhYVtjnKUatsKhZP1UwgTqOsWeqLrOGYjxkhgCj66xS_hdrHHh87H_Uv92XSlglPC8wGb7WJdKv44pQSn7iaKrNwow-_ONoZ2TiLuyV7YNOoaZjeLCFZz_Lgrkf9-Qz0CCXMnTORNTO-nrq_p_faUZMRzwz-rADBmJZrI7WwKpBIPxKIwO4aM8wR4EN74pHcAsi1ZQy5R3ObxtYrD5RP5laAHpnHWKyWrQMno1LFrvs84sg86HR93gLeRjob2_2rBfpbKNDevHyjP9U0GoJcURfVhk9j6Emsnh0gMmXrHLEKLoYu-wYYl6d7TZNkkbjsj6hMqfVTaznhAN5llwgUPaccy0yay4doQ7n-GuypdkeOGRY=w477-h210-no?authuser=0" width="800px" />



## 問題

> 出現 Error: Bad credentials

+ 檢視你的各項輸入是否正確，大小寫是否正確，是不是把庫名寫成網域



> 出現 Error: Not found 錯誤代號401
+ 如果你是在 Localhost 本地端測試，試著把檔案 Push到遠端

我當初就在這裡卡了許久一直想不出為什麼不成功，後來我才理解到因為你寫的接口指向你部落格網域而不是 Localhost......




## 參考文件

[十分鐘超詳細替 Hexo Next 開啟 Gitalk 留言版](https://israynotarray.com/hexo/20191206/2397475810/)

[[ CSDM ] hexo next主题深度优化(五)，评论系统换成gittalk](https://blog.csdn.net/as403045314/article/details/101337216/?ops_request_misc=&request_id=&biz_id=102&utm_term=gitalk%20401&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-3-101337216.nonecase&spm=1018.2226.3001.4187)

[[ CSDM ]Gridea 配置Gitalk 的异常：Error Bad credentials 和 Error Not Found](https://blog.csdn.net/qq_38463737/article/details/120288329)