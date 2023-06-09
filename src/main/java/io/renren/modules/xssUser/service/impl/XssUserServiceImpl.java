package io.renren.modules.xssUser.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.renren.common.utils.PageParamObject;
import io.renren.modules.xssUser.dao.XssUserDao;
import io.renren.modules.xssUser.entity.XssUserEntity;
import io.renren.modules.xssUser.service.XssUserService;
import org.springframework.beans.factory.annotation.Autowired;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Service
public class XssUserServiceImpl extends ServiceImpl<XssUserDao, XssUserEntity> implements XssUserService {

    @Autowired
    private XssUserDao xssUserMapper;
    public Page<XssUserEntity> getPage(PageParamObject param){
        QueryWrapper<XssUserEntity> objectQueryWrapper = new QueryWrapper<>();
        //TODO 设置查询时间范围

        Page<XssUserEntity> recruitInfoPage1 = xssUserMapper.selectPage(new Page<>(param.getCurPage(), param.getPageSize()), objectQueryWrapper);
        return recruitInfoPage1;
    }

    public int deleteXssUser(XssUserEntity xssUser){
        int i = xssUserMapper.deleteById(xssUser);
        return i;
    }

    public int updataXssUser(XssUserEntity xssUser){
        int i = xssUserMapper.updateById(xssUser);
        return i;
    }

}
