package fi.vamk.scm.server;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

public class TestController extends ServerApplicationTests {
    
    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testTruck() throws Exception {
        mockMvc.perform(get("/api/truck")).andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andExpect(jsonPath("$.id").value("1"))
                .andExpect(jsonPath("$.licencePlate").value("PUT-821"))
                .andExpect(jsonPath("$.name").value("Put Test"));

    }

    @Test
    public void testLocation() throws Exception {
        mockMvc.perform(get("/api/location")).andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andExpect(jsonPath("$.id").value("1"))
                .andExpect(jsonPath("$.latitude").value("63.0951"))
                .andExpect(jsonPath("$.longitude").value("21.6165"))
                .andExpect(jsonPath("$.maxHrCap").value("10000"))
                .andExpect(jsonPath("$.name").value("Vaasa"))
                .andExpect(jsonPath("$.no").value("1"))
                .andExpect(jsonPath("$.processingCost").value("1.5"))
                .andExpect(jsonPath("$.sla").value("3.5"));

    }
}
