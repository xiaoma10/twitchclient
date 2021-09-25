package xiaoma.jupiter.servlet;

import org.apache.commons.io.IOUtils;
import org.json.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import xiaoma.jupiter.entity.Game;
import xiaoma.jupiter.external.TwitchClient;
import xiaoma.jupiter.external.TwitchException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "GameServlet", urlPatterns = {"/game"})
public class GameServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Read game information from request body
        // request.getParameter("gamename"); 读url
        JSONObject requestBody = new JSONObject(IOUtils.toString(request.getReader())); //request.getReader() : 读body 是个stream
        String name = requestBody.getString("name");
        String developer = requestBody.getString("developer");
        float price = requestBody.getFloat("price");
        String releaseTime = requestBody.getString("release_time");
        String website = requestBody.getString("website");

        // Print game information to IDE console
        System.out.println("Name is: " + name);
        System.out.println("Developer is: " + developer);
        System.out.println("Release time is: " + releaseTime);
        System.out.println("Website is: " + website);
        System.out.println("Price is: " + price);

        // Return status : ok as response body to the client
        response.setContentType("application/json");
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("status", "ok");
        response.getWriter().print(jsonResponse);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");

        // Get gameName from request URL.
        String gameName = request.getParameter("game_name");
        TwitchClient client = new TwitchClient();

        // Let the client know the returned data is in JSON format.
        response.setContentType("application/json;charset=UTF-8");
        try {
            // Return the dedicated game information if gameName is provided in the request URL, otherwise return the top x games.
            if (gameName != null) { //when??
                response.getWriter().print(new ObjectMapper().writeValueAsString(client.searchGame(gameName)));
            } else {
                response.getWriter().print(new ObjectMapper().writeValueAsString(client.topGames(0)));
            }
        } catch (TwitchException e) {
            throw new ServletException(e);
        }

        // "{games: {name: vincent, developer: rick sun, price: 10}}"
        // JSONObject obj1 = new JSONObject();
        // obj.put("name", "vincent");
        // obj.put("developer", "rick sun");
        // ...
        // JSONObject obj2 = new JSONObject();
        // obj.put("name", "eddy");
        // obj.put("developer", "rick sun");
        // ...
        // JSONArray array = new JSONArray();
        // array.put(obj1);
        // array.put(obj2);
        // ...
        // JSONObject bigobj = new JSONObject();
        // bigobj.put("games", array);
        //
    }
}
