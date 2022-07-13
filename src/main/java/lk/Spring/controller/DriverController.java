package lk.Spring.controller;


import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.DriverDTO;
import lk.Spring.service.DriverService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO driverDTO){
        driverService.saveDriver(driverDTO);
        return new ResponseUtil(200,"Saved",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String id){
        driverService.deleteDriver(id);
        return new ResponseUtil(200,"Deleted Success",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO){
        driverService.updateDriver(driverDTO);
        return new ResponseUtil(200,"Update Success",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String id){
        return new ResponseUtil(200,"Done",driverService.searchDriver(id));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDriver (){
        return new ResponseUtil(200,"Done",driverService.getAllDriver());
    }



}
