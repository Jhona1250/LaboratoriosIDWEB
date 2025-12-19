import http.server
import socket

socket.
#clase AfInetAdress:
class CustomHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"Hello, World!")
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        self.send_response(200)
        self.end_headers()
        response = b"Received POST data: " + post_data
        self.wfile.write(response)
server = http.server.HTTPServer(("localhost", 8000), CustomHandler)
server.serve_forever()
