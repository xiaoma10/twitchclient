package xiaoma.jupiter.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import xiaoma.jupiter.db.MySQLConnection;
import xiaoma.jupiter.db.MySQLException;
import xiaoma.jupiter.entity.FavoriteRequestBody;
import xiaoma.jupiter.entity.Item;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@WebServlet(name = "FavoriteServlet", urlPatterns = {"/favorite"})
public class FavoriteServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        if (session == null) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }
        String userId = (String) session.getAttribute("user_id");

        // Get favorite item information from request body
//        ObjectMapper mapper = new ObjectMapper();
//        FavoriteRequestBody body = mapper.readValue(request.getReader(), FavoriteRequestBody.class);
        FavoriteRequestBody body = ServletUtil.readRequestBody(FavoriteRequestBody.class, request);

        if (body == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        MySQLConnection connection = null;
        try {
            // Save the favorite item to the database
            connection = new MySQLConnection();
            connection.setFavoriteItem(userId, body.getFavoriteItem());
        } catch (MySQLException e) {
            throw new ServletException(e);
        } finally {
            if (connection != null) {
                connection.close();
            }
        }

    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        if (session == null) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }
        String userId = (String) session.getAttribute("user_id");

//        ObjectMapper mapper = new ObjectMapper();
//        FavoriteRequestBody body = mapper.readValue(request.getReader(), FavoriteRequestBody.class);
        FavoriteRequestBody body = ServletUtil.readRequestBody(FavoriteRequestBody.class, request);

        if (body == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        MySQLConnection connection = null;
        try {
            // Remove the favorite item to the database
            connection = new MySQLConnection();
            connection.unsetFavoriteItem(userId, body.getFavoriteItem().getId());
        } catch (MySQLException e) {
            throw new ServletException(e);
        } finally {
            if (connection != null) {
                connection.close();
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        if (session == null) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }
        String userId = (String) session.getAttribute("user_id");

        Map<String, List<Item>> itemMap;
        MySQLConnection connection = null;
        try {
            // Read the favorite items from the database
            connection = new MySQLConnection();
            itemMap = connection.getFavoriteItems(userId);
            ServletUtil.writeItemMap(response, itemMap);
        } catch (MySQLException e) {
            throw new ServletException(e);
        } finally {
            if (connection != null) {
                connection.close();
            }
        }
    }
}
