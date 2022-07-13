package lk.Spring.controller;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.RatesDTO;
import lk.Spring.service.RatesService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Rate")
@CrossOrigin
public class RatesController {
    @Autowired
    RatesService ratesService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveRate(@ModelAttribute RatesDTO ratesDTO){
        ratesService.saveRate(ratesDTO);
        return new ResponseUtil(200,"Saved",null);
    }


    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRate(@RequestParam String id){
        ratesService.deleteRate(id);
        return new ResponseUtil(200,"Deleted Success",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRate(@RequestBody RatesDTO ratesDTO){
        ratesService.updateRate(ratesDTO);
        return new ResponseUtil(200,"Update Success",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRate(@PathVariable String id){
        return new ResponseUtil(200,"Done",ratesService.searchRate(id));
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRates (){
        return new ResponseUtil(200,"Done",ratesService.getAllRates());
    }



}
