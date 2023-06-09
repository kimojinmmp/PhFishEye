package io.renren.modules.xssUser.entity;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@TableName("tb_xss_user")
public class XssUserEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId
    private int id;

    private String currentTime;

    private String cookie;

    private String url;

    private String ip;

    private String browserName;

    private String browserVersion;

    private String osName;

    private String arch;

    @TableField("httpOnly")
    private String httpOnly;

    private String geolocation;

    @TableField("isPrivacySettingsEnabled")
    private String isPrivacySettingsEnabled;

}
