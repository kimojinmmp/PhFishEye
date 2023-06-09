package io.renren.modules.xssUser.controller;
import io.renren.common.utils.PageParamObject;
import io.renren.common.utils.R;
import io.renren.modules.xssUser.dao.XssUserDao;
import io.renren.modules.xssUser.entity.XssUserEntity;
import io.renren.modules.xssUser.service.impl.XssUserServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

@Api("XssUser用户控制器")
@RestController
@RequestMapping("/xss")
public class XssUserController {

    @Autowired
    private XssUserDao xssUserMapper;

    @Autowired
    private XssUserServiceImpl xssUserService;

    @ApiOperation("通过id获取数据")
    @PostMapping("/data/getById")
    public XssUserDao getById(){
        return (XssUserDao) xssUserMapper.selectById(1);
    }

    @ApiOperation("获取分页数据")
    @PostMapping("/data/getPage")
    public Page<XssUserEntity> getPage(@RequestBody PageParamObject params){
        return xssUserService.getPage(params);
    }

    @ApiOperation("XssUser删除数据")
    @PostMapping("/data/delUser")
    @ResponseBody
    @CrossOrigin
    public R delUser(@RequestBody XssUserEntity user){
        xssUserService.deleteXssUser(user);
        return R.ok();
    }

}
