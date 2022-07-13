package lk.Spring.controller;


import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.RentDTO;
import lk.Spring.service.RentService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Rent")
@CrossOrigin
public class RentController {

    @Autowired
    RentService rentService;


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody /*@ModelAttribute*/ RentDTO rentDTO){
        rentService.saveRent(rentDTO);
        return new ResponseUtil(200,"Saved",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRent(@RequestParam String id){
        rentService.deleteRent(id);
        return new ResponseUtil(200,"Deleted Success",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRent(@RequestBody RentDTO rentDTO){
        rentService.updateRent(rentDTO);
        return new ResponseUtil(200,"Update Success",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRent(@PathVariable String id){
        return new ResponseUtil(200,"Done",rentService.searchRent(id));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRent (){
        return new ResponseUtil(200,"Done",rentService.getAllRent());
    }


}
