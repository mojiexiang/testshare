const USER_AGENTS = [
  
    "Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; PAR-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; LYA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; GM1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; Mi Note 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; MI 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; MI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; MI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; MI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",  
    "Mozilla/5.0 (Linux; Android 9; MIX 2S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11; Redmi K30 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11; Redmi K20 Pro Premium Edition) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; M2006J10C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; M2006J10C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; MHA-AL00 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; 16 X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36", 
    "Mozilla/5.0 (Linux; Android 9; 16T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7_7) AppleWebKit/536.2 (KHTML, like Gecko) Chrome/43.0.857.0 Safari/536.2",
    "Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2 like Mac OS X; de-DE) AppleWebKit/534.19.3 (KHTML, like Gecko) Version/3.0.5 Mobile/8B114 Safari/6534.19.3",
    "Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0 like Mac OS X; sat-IN) AppleWebKit/534.10.3 (KHTML, like Gecko) Version/3.0.5 Mobile/8B112 Safari/6534.10.3",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7_4; rv:1.9.3.20) Gecko/2017-08-24 04:49:46 Firefox/3.6.5",
    "Mozilla/5.0 (iPod; U; CPU iPhone OS 3_3 like Mac OS X; pt-BR) AppleWebKit/531.16.7 (KHTML, like Gecko) Version/4.0.5 Mobile/8B112 Safari/6531.16.7",
    "Mozilla/5.0 (X11; Linux i686; rv:6.0) Gecko/20230811 Firefox/36.0",
    "Opera/9.44 (Windows NT 5.1; en-US) Presto/2.12.214 Version/11.00",
    "Mozilla/5.0 (Macintosh; PPC Mac OS X 10_5_2) AppleWebKit/5331 (KHTML, like Gecko) Chrome/37.0.859.0 Mobile Safari/5331",
    "Mozilla/5.0 (Windows NT 5.2; sl-SI; rv:1.9.0.20) Gecko/20130612 Firefox/37.0",
    "Mozilla/5.0 (Macintosh; PPC Mac OS X 10_8_4 rv:6.0; sl-SI) AppleWebKit/532.7.1 (KHTML, like Gecko) Version/4.1 Safari/532.7.1",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7_2 rv:3.0; en-US) AppleWebKit/534.3.7 (KHTML, like Gecko) Version/5.0.5 Safari/534.3.7",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 4.0; Trident/3.1)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/5340 (KHTML, like Gecko) Chrome/37.0.873.0 Mobile Safari/5340",
    "Mozilla/5.0 (compatible; MSIE 6.0; Windows NT 6.0; Trident/3.1)",
    "Mozilla/5.0 (Windows NT 5.1; sl-SI; rv:1.9.0.20) Gecko/20230808 Firefox/37.0",
    "Opera/9.37 (X11; Linux x86_64; en-US) Presto/2.12.190 Version/12.00",
    "Mozilla/5.0 (compatible; MSIE 11.0; Windows 98; Trident/5.1)",
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/5310 (KHTML, like Gecko) Chrome/39.0.829.0 Mobile Safari/5310",
    "Opera/8.77 (Windows NT 5.2; sl-SI) Presto/2.9.178 Version/10.00",
    "Mozilla/5.0 (Macintosh; PPC Mac OS X 10_6_6) AppleWebKit/5341 (KHTML, like Gecko) Chrome/39.0.887.0 Mobile Safari/5341",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows 98; Win 9x 4.90; Trident/5.0)",
    "Mozilla/5.0 (Windows; U; Windows 98; Win 9x 4.90) AppleWebKit/532.37.6 (KHTML, like Gecko) Version/4.0.1 Safari/532.37.6",
    "Mozilla/5.0 (compatible; MSIE 11.0; Windows NT 5.0; Trident/3.1)",
    "Opera/9.67 (X11; Linux x86_64; sl-SI) Presto/2.8.184 Version/11.00",
    "Opera/9.97 (X11; Linux x86_64; en-US) Presto/2.11.164 Version/11.00",
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/5330 (KHTML, like Gecko) Chrome/37.0.820.0 Mobile Safari/5330",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_1 rv:3.0; en-US) AppleWebKit/532.32.6 (KHTML, like Gecko) Version/4.0.1 Safari/532.32.6",
    "Mozilla/5.0 (Windows 98; Win 9x 4.90) AppleWebKit/5311 (KHTML, like Gecko) Chrome/40.0.811.0 Mobile Safari/5311",
    "Mozilla/5.0 (compatible; MSIE 5.0; Windows CE; Trident/5.1)",
    "Mozilla/5.0 (iPad; CPU OS 7_2_2 like Mac OS X; sl-SI) AppleWebKit/533.5.7 (KHTML, like Gecko) Version/3.0.5 Mobile/8B111 Safari/6533.5.7",
    "Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/533.35.6 (KHTML, like Gecko) Version/4.0 Safari/533.35.6",
    "Opera/8.12 (X11; Linux i686; en-US) Presto/2.10.326 Version/11.00",
    "Opera/8.37 (Windows NT 5.0; sl-SI) Presto/2.10.320 Version/10.00",
    "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/5362 (KHTML, like Gecko) Chrome/36.0.847.0 Mobile Safari/5362",
  ]

  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];
  
  module.exports = {
    USER_AGENT
  }
