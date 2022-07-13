package lk.Spring.controller;


import lk.Spring.dto.StaffDTO;
import lk.Spring.service.StaffService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Staff")
@CrossOrigin
public class StaffController {

    @Autowired
    StaffService staffService;


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveStaff(@ModelAttribute StaffDTO staffDTO){
        staffService.saveStaff(staffDTO);
        return new ResponseUtil(200,"Saved",null);
    }


    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteStaff(@RequestParam String id){
        staffService.deleteStaff(id);
        return new ResponseUtil(200,"Deleted Success",null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateStaff(@RequestBody StaffDTO staffDTO){
        staffService.updateStaff(staffDTO);
        return new ResponseUtil(200,"Update Success",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchStaff(@PathVariable String id){
        return new ResponseUtil(200,"Done",staffService.searchStaff(id));
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllStaff (){
        return new ResponseUtil(200,"Done",staffService.getAllStaff());
    }




}
