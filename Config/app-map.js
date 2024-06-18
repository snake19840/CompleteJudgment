(self.webpackChunkvue = self.webpackChunkvue || []).push([
  [874],
  {
    34661: function (e, t, n) {
      "use strict";
      n.d(t, {
        AW: function () {
          return i;
        },
        Hi: function () {
          return u;
        },
        KO: function () {
          return r;
        },
        nL: function () {
          return c;
        },
        oQ: function () {
          return o;
        },
        qG: function () {
          return a;
        },
      });
      var a = {
          NOT_LAUNCH: {
            stage: 10,
            stageName: "方案发起",
            state: 10,
            name: "待发起",
            description: "业务员发起前",
          },
          COMPANY_DISCARD_CHECK: {
            stage: 10,
            stageName: "方案发起",
            state: 15,
            name: "放弃待审核",
            description: "业务员备案企业放弃",
            style: { color: "#C7C727" },
          },
          COMPANY_DISCARD: {
            stage: 10,
            stageName: "方案发起",
            state: 20,
            name: "已放弃",
            description: "企业放弃备案通过",
            style: { color: "#C7C727" },
          },
          INNER_AUDIT_BACK: {
            stage: 10,
            stageName: "方案发起",
            state: 30,
            name: "内审退件",
            description: "业务主管审核退件",
            style: { color: "#E52E2E" },
          },
          ACCEPTANCE_BACK: {
            stage: 10,
            stageName: "方案发起",
            state: 40,
            name: "受理退件",
            description: "调度总岗受理退件",
            style: { color: "#E52E2E" },
          },
          DO_INNER_AUDIT: {
            stage: 20,
            stageName: "方案审批",
            state: 50,
            name: "待内审",
            description: "业务主管待审批",
          },
          DO_ACCEPTANCE: {
            stage: 20,
            stageName: "方案审批",
            state: 60,
            name: "待受理",
            description: "调度总岗审核前",
          },
          DO_CONFIGURE: {
            stage: 30,
            stageName: "任务派发",
            state: 70,
            name: "待配置",
            description: "调度总岗配置前",
          },
          DO_CLAIM: {
            stage: 30,
            stageName: "任务派发",
            state: 80,
            name: "待认领",
            description: "调度池等待业务员认领",
          },
          DO_ASSIGN: {
            stage: 30,
            stageName: "任务派发",
            state: 90,
            name: "待指派机构",
            description: "业务员认领完等待业务员指派",
          },
          ORGAN_REJECT_ORDER: {
            stage: 30,
            stageName: "任务派发",
            state: 105,
            name: "机构拒单",
            description: "机构负责人选择了拒单",
          },
          SERVICE_EXECUTING: {
            stage: 40,
            stageName: "任务执行",
            state: 100,
            name: "服务中",
            description: "服务中",
          },
          TASK_COMPLETION: {
            stage: 40,
            stageName: "任务执行",
            state: 110,
            name: "服务完成",
            description: "服务完成",
          },
        },
        r = {
          HIDDEN: { stage: 0, stageName: "待分发", state: 0, name: "待分发" },
          DO_INNER_AUDIT: {
            stage: 10,
            stageName: "方案审批",
            state: 10,
            name: "待内审",
          },
          INNER_AUDIT_BACK: {
            stage: 10,
            stageName: "方案审批",
            state: 30,
            name: "内审退件",
          },
          DO_ACCEPTANCE: {
            stage: 10,
            stageName: "方案审批",
            state: 40,
            name: "待受理",
          },
          ACCEPTANCE_BACK: {
            stage: 10,
            stageName: "方案审批",
            state: 50,
            name: "受理退件",
          },
          DO_CONFIGURE: {
            stage: 20,
            stageName: "任务派发",
            state: 60,
            name: "待配置",
          },
          DO_CLAIM: {
            stage: 20,
            stageName: "任务派发",
            state: 70,
            name: "待认领",
          },
          DO_ASSIGN: {
            stage: 20,
            stageName: "任务派发",
            state: 80,
            name: "待指派机构",
          },
          ORGAN_DO_RECEIVE_ORDER: {
            stage: 20,
            stageName: "任务派发",
            state: 90,
            name: "待机构接单",
          },
          ORGAN_REJECT_ORDER: {
            stage: 20,
            stageName: "任务派发",
            state: 100,
            name: "机构拒单",
          },
          DO_ASSIGN_SPECIALIST: {
            stage: 20,
            stageName: "任务派发",
            state: 110,
            name: "待分派专家",
          },
          SPECIALIST_DO_RECEIVE_ORDER: {
            stage: 20,
            stageName: "任务派发",
            state: 120,
            name: "待专家接单",
          },
          SPECIALIST_REJECT_ORDER: {
            stage: 20,
            stageName: "任务派发",
            state: 130,
            name: "专家拒单",
          },
          SPECIALIST_DO_SIGN: {
            stage: 30,
            stageName: "任务执行",
            state: 140,
            name: "专家待签到",
          },
          SPECIALIST_SIGN_CANCEL: {
            stage: 30,
            stageName: "任务执行",
            state: 145,
            name: "取消签到待审核",
          },
          SPECIALIST_DO_SIGN_OUT: {
            stage: 30,
            stageName: "任务执行",
            state: 150,
            name: "待签出",
          },
          SPECIALIST_SING_OUT: {
            stage: 30,
            stageName: "任务执行",
            state: 160,
            name: "正常签出",
          },
          SPECIALIST_FORCE_SING_OUT: {
            stage: 30,
            stageName: "任务执行",
            state: 170,
            name: "强制签出",
          },
          REPORT_DO_EDIT: {
            stage: 30,
            stageName: "任务执行",
            state: 180,
            name: "报告待编制",
          },
          REPORT_AUDIT_BACK: {
            stage: 30,
            stageName: "任务执行",
            state: 181,
            name: "服务方案退回",
          },
          REPORT_DO_AUDIT: {
            stage: 30,
            stageName: "任务执行",
            state: 183,
            name: "服务方案待审核",
          },
          REPORT_TEMP_STORAGE: {
            stage: 30,
            stageName: "任务执行",
            state: 185,
            name: "报告暂存",
          },
          REPORT_FIRST_AUDIT_BACK: {
            stage: 30,
            stageName: "任务执行",
            state: 188,
            name: "报告初审退件",
          },
          REPORT_DO_FIRST_AUDIT: {
            stage: 30,
            stageName: "任务执行",
            state: 190,
            name: "报告待初审",
          },
          REPORT_REPEAT_AUDIT_BACK: {
            stage: 30,
            stageName: "任务执行",
            state: 195,
            name: "报告复审退件",
          },
          REPORT_DO_REPEAT_AUDIT: {
            stage: 30,
            stageName: "任务执行",
            state: 200,
            name: "报告待复审",
          },
          REPORT_DO_INSURANCE_ACCEPT: {
            stage: 30,
            stageName: "任务执行",
            state: 205,
            name: "报告待保险接收",
          },
          REPORT_DO_INSURANCE_BACK: {
            stage: 30,
            stageName: "任务执行",
            state: 208,
            name: "报告保险退件",
          },
          REPORT_AUDIT_COMPLETION: {
            stage: 40,
            stageName: "任务完成",
            state: 210,
            name: "服务完成待对账",
          },
          DO_ORGAN_CHECK_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 220,
            name: "待机构核对账单",
          },
          ORGAN_RETURN_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 230,
            name: "机构退回账单",
          },
          DO_INSURANCE_COM_CHECK_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 240,
            name: "待保险公司核对账单",
          },
          INSURANCE_COM_RETURN_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 250,
            name: "保险公司退回账单",
          },
          BILL_WITHDRAW: {
            stage: 40,
            stageName: "账单结算",
            state: 255,
            name: "账单废止",
          },
          DO_SEND_APPROVAL_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 260,
            name: "待调度总岗发起审批",
          },
          BALANCE_WITHDRAW: {
            stage: 40,
            stageName: "账单结算",
            state: 265,
            name: "结算撤回",
          },
          DO_FINANCE_AUDIT_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 270,
            name: "待财务审核",
          },
          FINANCE_RETURN_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 280,
            name: "财务退回账单",
          },
          DO_DIRECTOR_AUDIT_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 290,
            name: "待主任审核",
          },
          DIRECTOR_RETURN_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 300,
            name: "主任退回",
          },
          DO_FINANCE_BALANCE_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 310,
            name: "待财务结算/备案",
          },
          FINANCE_BALANCE_COMPLETION: {
            stage: 40,
            stageName: "账单结算",
            state: 320,
            name: "财务支出备案完成",
          },
          ORGAN_SIGN_RECEIVE_BALANCE_BILL: {
            stage: 40,
            stageName: "账单结算",
            state: 330,
            name: "机构签收完成",
          },
        },
        o = {
          TRAINING_REPORT: { type: 10, reportName: "入厂培训报告" },
          RISK_REPORT: { type: 20, reportName: "风险辨识报告" },
          HIDDEN_DANGER_REPORT: { type: 30, reportName: "隐患排查报告" },
          EMERGENCY_PLAN_REPORT: {
            type: 40,
            reportName: "生产安全事故应急预案编制和演练报告",
          },
          STANDARDIZATION_REPORT: {
            type: 50,
            reportName: "安全生产标准化建设报告",
          },
          REVIEW_REPORT: { type: 60, reportName: "一般复查报告" },
          REVIEW_IMPORTANT_REPORT: { type: 70, reportName: "重大复查报告" },
          FIRE_TRAINING: { type: 80, reportName: "消防应急演练培训报告" },
          OTHER: { type: 1e3, reportName: "其他报告" },
        },
        i = {
          ADMIN: { tag: "admin", name: "管理员" },
          INSURANCE_COMPANY_MANAGER: {
            tag: "INSURANCE_COMPANY_MANAGER",
            name: "保险公司主管",
          },
          INSURANCE_COMPANY_SALESMAN: {
            tag: "INSURANCE_COMPANY_SALESMAN",
            name: "保险公司业务员",
          },
          INSURANCE_COMPANY_MONITOR: {
            tag: "INSURANCE_COMPANY_MONITOR",
            name: "保险公司流程监督员",
          },
          INSURANCE_COMPANY_LEADER: {
            tag: "INSURANCE_COMPANY_LEADER",
            name: "分公司项目负责人(结算)",
          },
          SERVICE_CENTER_DISTRIBUTE: {
            tag: "SERVICE_CENTER_DISTRIBUTE",
            name: "服务中心派单员",
          },
          SERVICE_CENTER_DISPATCH: {
            tag: "SERVICE_CENTER_DISPATCH",
            name: "服务中心调度总岗",
          },
          SERVICE_CENTER_OPERATE: {
            tag: "SERVICE_CENTER_OPERATE",
            name: "服务中心运营人员",
          },
          SERVICE_CENTER_DIRECTOR: {
            tag: "SERVICE_CENTER_DIRECTOR",
            name: "服务中心中心主任",
          },
          SERVICE_CENTER_RISK: {
            tag: "SERVICE_CENTER_RISK",
            name: "服务中心风控人员",
          },
          SERVICE_CENTER_FINANCE: {
            tag: "SERVICE_CENTER_FINANCE",
            name: "服务中心财务人员",
          },
          SERVICE_CENTER_SUPERVISOR: {
            tag: "SERVICE_CENTER_SUPERVISOR",
            name: "监事单位",
          },
          SERVICE_CENTER_CUSTOMER: {
            tag: "SERVICE_CENTER_CUSTOMER",
            name: "服务中心客服人员",
          },
          SERVICE_CENTER_MANAGER: {
            tag: "SERVICE_CENTER_MANAGER",
            name: "服务中心系统管理员",
          },
          SERVICE_ORGAN_SPECIALIST: {
            tag: "SERVICE_ORGAN_SPECIALIST",
            name: "服务机构服务专家",
          },
          SERVICE_ORGAN_MANAGER: {
            tag: "SERVICE_ORGAN_MANAGER",
            name: "服务机构项目负责人",
          },
          SERVICE_ORGAN_REPORT: {
            tag: "SERVICE_ORGAN_REPORT",
            name: "服务机构报告审核岗",
          },
          COMPANY_MANAGER: { tag: "COMPANY_MANAGER", name: "企业安管员" },
          COMPANY_USER: { tag: "COMPANY_USER", name: "企业普通用户" },
          GOV_SHI: { tag: "GOV_SHI", name: "市应急局" },
          GOV_QUXIAN: { tag: "GOV_QUXIAN", name: "区县应急局" },
          GOV_JIEDAO: { tag: "GOV_JIEDAO", name: "街道应急局" },
          GOVERNMENT: { tag: "GOVERNMENT", name: "政府" },
          INSURANCE_COMPANY_REPORTER: {
            tag: "INSURANCE_COMPANY_REPORTER",
            name: "分公司项目负责人(报告管理)",
          },
          INSURANCE_COMPANY_DISTRIBUTE: {
            tag: "INSURANCE_COMPANY_DISTRIBUTE",
            name: "分公司项目负责人(派单)",
          },
          INSURANCE_COMPANY_CUSTOMER: {
            tag: "INSURANCE_COMPANY_CUSTOMER",
            name: "保险公司客服人员",
          },
        },
        u = {
          15: { type: 15, name: "全大市", description: "三个一服务" },
          16: {
            type: 16,
            name: "鄞州5万以下",
            description: "三个一服务+一个执行+一个复查",
          },
          17: {
            type: 17,
            name: "鄞州5万以上",
            description: "三个一服务+两个执行+一个复查",
          },
          18: {
            type: 17,
            name: "鄞州驻点30% 5万以下",
            description: "三个一服务",
          },
          19: {
            type: 19,
            name: "鄞州驻点30% 5万以上",
            description: "三个一服务",
          },
          20: { type: 20, name: "宁海一般企业方案", description: "三个一服务" },
          21: {
            type: 21,
            name: "宁海三大类企业方案",
            description: "三个一服务",
          },
          22: { type: 22, name: "小企业服务方案", description: "三个一服务" },
        },
        c = {
          RM_CODE: {
            id: 6,
            tag: "rm",
            name: "中国人民财产保险股份有限公司宁波市分公司",
            value: 1,
          },
          TPY_CODE: {
            id: 5,
            tag: "tpy",
            name: "中国太平洋财产保险股份有限公司宁波分公司",
            value: 2,
          },
          PA_CODE: {
            id: 4,
            tag: "pa",
            name: "中国平安财产保险股份有限公司宁波分公司",
            value: 4,
          },
          RS_CODE: {
            id: 3,
            tag: "rs",
            name: "中国人寿财产保险股份有限公司宁波市分公司",
            value: 8,
          },
          DD_CODE: {
            id: 2,
            tag: "dd",
            name: "中国大地财产保险股份有限公司宁波分公司",
            value: 16,
          },
          YG_CODE: {
            id: 9,
            tag: "yg",
            name: "阳光财产保险股份有限公司宁波市分公司",
            value: 32,
          },
          YDTH_CODE: {
            id: 10,
            tag: "ydth",
            name: "英大泰和财产保险股份有限公司宁波市分公司",
            value: 64,
          },
          ZHLH_CODE: {
            id: 11,
            tag: "zhlh",
            name: "中华联合财产保险股份有限公司宁波分公司",
            value: 128,
          },
          DHHY_CODE: {
            id: 12,
            tag: "dhhy",
            name: "东海航运保险股份有限公司宁波市分公司",
            value: 256,
          },
          TA_CODE: {
            id: 13,
            tag: "ta",
            name: "天安财产保险股份有限公司宁波分公司",
            value: 512,
          },
          YA_CODE: {
            id: 14,
            tag: "ya",
            name: "永安财产保险股份有限公司宁波分公司",
            value: 1024,
          },
          TP_CODE: {
            id: 15,
            tag: "tp",
            name: "太平财产保险股份有限公司宁波分公司",
            value: 2048,
          },
          ASTP_CODE: {
            id: 16,
            tag: "astp",
            name: "安盛天平财产保险股份有限公司宁波市分公司",
            value: 4096,
          },
          XD_CODE: {
            id: 17,
            tag: "xd",
            name: "信达财产保险股份有限公司宁波市分公司",
            value: 8192,
          },
          LB_CODE: {
            id: 18,
            tag: "lb",
            name: "利宝保险有限公司宁波市分公司",
            value: 16384,
          },
          HA_CODE: {
            id: 19,
            tag: "ha",
            name: "华安财产保险股份有限公司宁波分公司",
            value: 32768,
          },
          ZS_CODE: {
            id: 20,
            tag: "zs",
            name: "浙商财产保险股份有限公司宁波市分公司",
            value: 65536,
          },
          ZY_CODE: {
            id: 21,
            tag: "zy",
            name: "中银保险有限公司宁波市分公司",
            value: 131072,
          },
          AC_CODE: {
            id: 22,
            tag: "ac",
            name: "安诚财产保险股份有限公司宁波市分公司",
            value: 262144,
          },
          ZJ_CODE: {
            id: 23,
            tag: "zj",
            name: "紫金财产保险股份有限公司宁波市分公司",
            value: 524288,
          },
          CA_CODE: {
            id: 24,
            tag: "ca",
            name: "长安责任保险股份有限公司宁波市分公司",
            value: 1048576,
          },
          MA_CODE: {
            id: 25,
            tag: "ma",
            name: "民安财产保险有限公司宁波市分公司",
            value: 2097152,
          },
          DB_CODE: {
            id: 26,
            tag: "db",
            name: "都邦保险有限公司宁波市分公司",
            value: 4194304,
          },
          ZC_CODE: {
            id: 27,
            tag: "zc",
            name: "众诚汽车保险股份有限公司宁波市分公司",
            value: 8388608,
          },
          HT_CODE: {
            id: 28,
            tag: "ht",
            name: "华泰财产保险股份有限公司宁波市分公司",
            value: 16777216,
          },
          AB_CODE: {
            id: 29,
            tag: "ab",
            name: "安邦保险集团股份有限公司宁波市分公司",
            value: 33554432,
          },
          BH_CODE: {
            id: 30,
            tag: "bh",
            name: "渤海财产保险股份有限公司宁波市分公司",
            value: 67108864,
          },
          TS_CODE: {
            id: 31,
            tag: "ts",
            name: "泰山财产保险股份有限公司宁波市分公司",
            value: 134217728,
          },
          YC_CODE: {
            id: 32,
            tag: "yc",
            name: "永诚财产保险股份有限公司宁波分公司",
            value: 268435456,
          },
          SD_CODE: {
            id: 33,
            tag: "sd",
            name: "史带财产保险股份有限公司宁波市分公司",
            value: 536870912,
          },
          AX_CODE: {
            id: 34,
            tag: "ax",
            name: "安心财产保险有限责任公司宁波市分公司",
            value: 1073741824,
          },
        };
      t.ZP = {
        Test: [
          { id: 0, text: "未执行" },
          { id: 1, text: "正在执行" },
          { id: 2, text: "执行完成" },
        ],
        CheckboxList: [
          { key: 0, value: "按钮0" },
          { key: 1, value: "按钮1" },
          { key: 2, value: "按钮2" },
        ],
        policyState: {
          KEEP_ALIVE: { state: 10, name: "在保" },
          DISABLE_ALIVE: {
            state: 20,
            name: "已脱保",
            style: { color: "#E52E2E" },
          },
        },
        policyServiceState: a,
        itemServiceState: r,
        reportType: o,
        userType: i,
        packageType: u,
        insuranceCompanyEnum: c,
      };
    },
    27132: function (e, t) {
      "use strict";
      t.Z = {
        PagerData: {
          pageNumber: 1,
          pageSize: 10,
          pageTotal: 0,
          pageItemCount: 0,
          data: [],
        },
      };
    },
    14861: function (e, t, n) {
      "use strict";
      n(33510), n(79485), n(38359), n(32666);
      var a = n(11802);
      (n(70538).default.prototype.$Http = a.dJ), (window.$Http = a.dJ);
    },
    74364: function (e, t, n) {
      "use strict";
      var a = n(70538),
        r = n(9665),
        o = n(87330),
        i = n(37904),
        u = n(59742),
        c = n(96346),
        m = n(98327),
        h = n(26569),
        s = n(4384),
        p = n(76732),
        d = n(88382),
        l = n(41745),
        f = n(27668),
        g = n(36466),
        b = n(25530),
        v = n(81101),
        E = n(11977),
        y = n(26306),
        C = n(52579),
        A = n(75332),
        S = n(73903);
      a.default.use(y.Z),
        a.default.use(f.Z),
        a.default.use(l.Z),
        a.default.use(r.Z),
        a.default.use(o.Z),
        a.default.use(i.Z),
        a.default.use(u.Z),
        a.default.use(c.Z),
        a.default.use(p.Z),
        a.default.use(d.Z),
        a.default.use(g.Z),
        a.default.use(b.Z),
        a.default.use(v.Z),
        a.default.use(E.Z),
        a.default.use(m.Z),
        a.default.use(h.Z),
        a.default.use(s.Z),
        a.default.use(C.Z),
        a.default.use(A.Z),
        a.default.use(S.Z);
    },
    22319: function (e, t, n) {
      "use strict";
      var a = n(70538),
        r = n(96547),
        o = n(54867),
        i = n(26944),
        u = n(63250);
      (window.$Vue = a.default),
        (a.default.prototype.$Storage = r.Z),
        (window.$Storage = r.Z),
        (a.default.prototype.$Confirm = o.Z),
        (a.default.prototype.$String = i.Z),
        (window.$String = i.Z),
        (a.default.prototype.$EventBus = new a.default()),
        (window.$EventBus = a.default.prototype.$EventBus),
        (a.default.prototype.$hashCode = u.u);
    },
    52381: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return w;
        },
        PV: function () {
          return k;
        },
        e3: function () {
          return N;
        },
      });
      n(57327), n(41539), n(9653);
      var a = n(70538),
        r = n(78345),
        o =
          (n(92222),
          n(66992),
          n(88674),
          n(78783),
          n(33948),
          function () {
            return n.e(2630).then(n.bind(n, 2630));
          }),
        i = function () {
          return n.e(2630).then(n.bind(n, 2630));
        },
        u = [
          {
            name: "成效中心",
            path: "/effectivenessCenter",
            component: i,
            meta: { auth: !0 },
            children: [
              {
                path: "riskDetail",
                component: function () {
                  return n.e(5093).then(n.bind(n, 95093));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "成效中心", route: "" },
                    { name: "风险管理", route: "/effectivenessCenter/risk" },
                    { name: "风险管理详情", route: "" },
                  ],
                },
              },
              {
                path: "lessonDetail",
                component: function () {
                  return n.e(8045).then(n.bind(n, 68045));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "成效中心", route: "" },
                    { name: "教培管理", route: "/effectivenessCenter/lesson" },
                    { name: "教培管理详情", route: "" },
                  ],
                },
              },
            ],
          },
          {
            name: "后台管理",
            path: "/backstageManagement",
            component: i,
            meta: { auth: !0 },
            children: [
              {
                path: "importData",
                component: function () {
                  return n.e(3664).then(n.bind(n, 3664));
                },
                meta: {
                  auth: !1,
                  breadcrumb: [
                    { name: "入库确认", route: "" },
                    { name: "待入库列表", route: "" },
                  ],
                },
              },
              {
                path: "templateList",
                component: function () {
                  return n.e(7865).then(n.bind(n, 97865));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "后台管理", route: "" },
                    { name: "模板列表", route: "" },
                  ],
                },
              },
              {
                path: "templateMultipleList",
                component: function () {
                  return n.e(5322).then(n.bind(n, 5322));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "后台管理", route: "" },
                    { name: "模板列表", route: "" },
                  ],
                },
              },
              {
                path: "templateInput",
                component: function () {
                  return Promise.all([n.e(9116), n.e(1694)]).then(
                    n.bind(n, 31694)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "后台管理", route: "" },
                    { name: "模板输入", route: "" },
                  ],
                },
              },
              {
                path: "tableList",
                component: function () {
                  return n.e(7560).then(n.bind(n, 97560));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [{ name: "后台管理", route: "" }],
                },
              },
              {
                path: "columnSelect",
                component: function () {
                  return n.e(7989).then(n.bind(n, 97989));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [{ name: "后台管理", route: "" }],
                },
              },
            ],
          },
        ],
        c = function () {
          return n.e(2630).then(n.bind(n, 2630));
        },
        m = [
          {
            name: "后台管理",
            path: "/backstageManagement",
            component: c,
            meta: { auth: !0 },
            children: [
              {
                path: "Test1",
                component: function () {
                  return n.e(264).then(n.bind(n, 70264));
                },
                meta: { auth: !0 },
              },
              {
                path: "Testm",
                component: function () {
                  return n.e(8946).then(n.bind(n, 18946));
                },
                meta: { auth: !0 },
              },
              {
                path: "Test1Add",
                component: function () {
                  return Promise.all([n.e(9116), n.e(5568)]).then(
                    n.bind(n, 15568)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "TestAdd",
                component: function () {
                  return n.e(6404).then(n.bind(n, 56404));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/InsurancePolicyPreAdd",
                component: function () {
                  return n.e(3844).then(n.bind(n, 23844));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/InsuranceServicePackageTypesAdd",
                component: function () {
                  return n.e(1453).then(n.bind(n, 21453));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/InsuranceServiceTimeAdd",
                component: function () {
                  return n.e(287).then(n.bind(n, 40287));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/InsuranceServicePackageReportTemplateAdd",
                component: function () {
                  return n.e(4999).then(n.bind(n, 24999));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/InsuranceServiceStatisticsTypeAdd",
                component: function () {
                  return n.e(3606).then(n.bind(n, 83606));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyDangerHighTemplateAdd",
                component: function () {
                  return n.e(8732).then(n.bind(n, 98732));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyRiskHighTemplates",
                component: function () {
                  return n.e(718).then(n.bind(n, 80718));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyRiskMetalHighTemplateAdd",
                component: function () {
                  return n.e(3162).then(n.bind(n, 23162));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/InsuranceServiceTypeAdd",
                component: function () {
                  return n.e(2603).then(n.bind(n, 12603));
                },
                meta: { auth: !0 },
              },
              {
                path: "InsuranceSubCompanyAdd",
                component: function () {
                  return n.e(5446).then(n.bind(n, 75446));
                },
                meta: { auth: !0 },
              },
              {
                path: "emergencyBureauAdd",
                component: function () {
                  return n.e(8397).then(n.bind(n, 78397));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyTrainAdd",
                component: function () {
                  return n.e(803).then(n.bind(n, 40803));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyDangerAdd",
                component: function () {
                  return n.e(6652).then(n.bind(n, 16652));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyEmergencyAdd",
                component: function () {
                  return n.e(7802).then(n.bind(n, 77802));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyOtherServiceAdd",
                component: function () {
                  return n.e(9421).then(n.bind(n, 29421));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/CompanyRiskAdd",
                component: function () {
                  return n.e(7589).then(n.bind(n, 97589));
                },
                meta: { auth: !0 },
              },
              {
                path: "View/companyTrainRecordAdd",
                component: function () {
                  return n.e(5196).then(n.bind(n, 35196));
                },
                meta: { auth: !0 },
              },
              {
                path: "StatisticsPolicySpan",
                component: function () {
                  return n.e(1592).then(n.bind(n, 51592));
                },
                meta: { auth: !0 },
              },
              {
                path: "StatisticsPolicySpanAdd",
                component: function () {
                  return n.e(2130).then(n.bind(n, 22130));
                },
                meta: { auth: !0 },
              },
              {
                path: "StatisticsPolicyReportSpanAdd",
                component: function () {
                  return n.e(729).then(n.bind(n, 60729));
                },
                meta: { auth: !0 },
              },
              {
                path: "StatisticsItemSpanAdd",
                component: function () {
                  return n.e(8733).then(n.bind(n, 8733));
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "配置",
            path: "/config",
            component: c,
            meta: { auth: !0 },
            children: [
              {
                path: "AdminConfigBase",
                component: function () {
                  return n.e(3350).then(n.bind(n, 78757));
                },
                meta: { auth: !0 },
              },
              {
                path: "SysStatisticsList",
                component: function () {
                  return n.e(595).then(n.bind(n, 30595));
                },
                meta: { auth: !0 },
              },
              {
                path: "SysSqlTableList",
                component: function () {
                  return n.e(5533).then(n.bind(n, 35533));
                },
                meta: { auth: !0 },
              },
              {
                path: "SysBindList",
                component: function () {
                  return n.e(4185).then(n.bind(n, 54185));
                },
                meta: { auth: !0 },
              },
              {
                path: "SysStatistics",
                component: function () {
                  return n.e(1676).then(n.bind(n, 71676));
                },
                meta: { auth: !0 },
              },
              {
                path: "ConfigRefererAdd",
                component: function () {
                  return n.e(1863).then(n.bind(n, 31863));
                },
                meta: { auth: !0 },
              },
              {
                path: "GlobalAdd",
                component: function () {
                  return n.e(4499).then(n.bind(n, 24499));
                },
                meta: { auth: !0 },
              },
              {
                path: "GlobalConfigAdd",
                component: function () {
                  return n.e(3220).then(n.bind(n, 43220));
                },
                meta: { auth: !0 },
              },
              {
                path: "GlobalSecretKeyAdd",
                component: function () {
                  return n.e(7965).then(n.bind(n, 17965));
                },
                meta: { auth: !0 },
              },
              {
                path: "Tool",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(5144),
                  ]).then(n.bind(n, 95144));
                },
                meta: { auth: !0 },
              },
              {
                path: "Fix",
                component: function () {
                  return n.e(4559).then(n.bind(n, 74559));
                },
                meta: { auth: !0 },
              },
              {
                path: "Download",
                component: function () {
                  return n.e(1380).then(n.bind(n, 71380));
                },
                meta: { auth: !0 },
              },
              {
                path: "LastLog",
                component: function () {
                  return n.e(6312).then(n.bind(n, 26312));
                },
                meta: { auth: !0 },
              },
              {
                path: "DangerReportSafetyOrig",
                component: function () {
                  return n.e(7691).then(n.bind(n, 17691));
                },
                meta: { auth: !0 },
              },
              {
                path: "DangerReportSafetyOrigAdd",
                component: function () {
                  return n.e(5064).then(n.bind(n, 45064));
                },
                meta: { auth: !0 },
              },
              {
                path: "TestChange",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(3690),
                  ]).then(n.bind(n, 43690));
                },
                meta: { auth: !0 },
              },
            ],
          },
        ],
        h = [],
        s = function () {
          return n.e(2630).then(n.bind(n, 2630));
        },
        p = [
          {
            name: "工作台",
            path: "/workbench",
            component: s,
            meta: { auth: !0 },
            children: [
              {
                path: "companyDiscard",
                component: function () {
                  return n.e(4666).then(n.bind(n, 84666));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "工作台", route: "/" },
                    { name: "企业放弃备案", route: "" },
                  ],
                },
              },
              {
                path: "compensateNew",
                component: function () {
                  return n.e(8299).then(n.bind(n, 78299));
                },
                meta: { auth: !0 },
              },
              {
                path: "serviceNew",
                component: function () {
                  return n.e(8378).then(n.bind(n, 68378));
                },
                meta: { auth: !0 },
              },
              {
                path: "compensateAllNew",
                component: function () {
                  return n.e(6095).then(n.bind(n, 16095));
                },
                meta: { auth: !0 },
              },
              {
                path: "serviceAllNew",
                component: function () {
                  return n.e(2330).then(n.bind(n, 52330));
                },
                meta: { auth: !0 },
              },
              {
                path: "riskNewDetail",
                component: function () {
                  return n.e(4204).then(n.bind(n, 54204));
                },
                meta: { auth: !0 },
              },
              {
                path: "dangerNewDetail",
                component: function () {
                  return n.e(5624).then(n.bind(n, 55624));
                },
                meta: { auth: !0 },
              },
              {
                path: "insuranceServiceItemNewDetail",
                component: function () {
                  return n.e(9809).then(n.bind(n, 39809));
                },
                meta: { auth: !0 },
              },
              {
                path: "trainNewDetail",
                component: function () {
                  return n.e(7671).then(n.bind(n, 57671));
                },
                meta: { auth: !0 },
              },
              {
                path: "fiveCompanyDetail",
                component: function () {
                  return n.e(7368).then(n.bind(n, 17368));
                },
                meta: { auth: !0 },
              },
              {
                path: "fiveCompanyEdit",
                component: function () {
                  return n.e(8029).then(n.bind(n, 18029));
                },
                meta: { auth: !0 },
              },
              {
                path: "fiveCompanyCheckDetail",
                component: function () {
                  return n.e(2674).then(n.bind(n, 32674));
                },
                meta: { auth: !0 },
              },
              {
                path: "fiveCompanyCheckLogDetail",
                component: function () {
                  return n.e(2147).then(n.bind(n, 12147));
                },
                meta: { auth: !0 },
              },
              {
                path: "fiveCompanyNameEditEdit",
                component: function () {
                  return n.e(9452).then(n.bind(n, 9452));
                },
                meta: { auth: !0 },
              },
              {
                path: "fiveCompanyNameEditDetail",
                component: function () {
                  return n.e(19).then(n.bind(n, 40019));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyRiskTemplateAdd",
                component: function () {
                  return n.e(7197).then(n.bind(n, 37197));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyRiskTemplateEdit",
                component: function () {
                  return n.e(2985).then(n.bind(n, 22985));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyRiskTemplateDetail",
                component: function () {
                  return n.e(7293).then(n.bind(n, 27293));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyDangerTemplateAdd",
                component: function () {
                  return n.e(3849).then(n.bind(n, 53849));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyDangerTemplateEdit",
                component: function () {
                  return n.e(8443).then(n.bind(n, 28443));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyDangerTemplateDetail",
                component: function () {
                  return n.e(9340).then(n.bind(n, 19340));
                },
                meta: { auth: !0 },
              },
              {
                path: "riskNewDetailEdit",
                component: function () {
                  return n.e(2054).then(n.bind(n, 82054));
                },
                meta: { auth: !0 },
              },
              {
                path: "dangerNewDetailEdit",
                component: function () {
                  return n.e(409).then(n.bind(n, 10409));
                },
                meta: { auth: !0 },
              },
              {
                path: "insuranceServiceItemNewDetailEdit",
                component: function () {
                  return n.e(3977).then(n.bind(n, 33977));
                },
                meta: { auth: !0 },
              },
              {
                path: "trainNewDetailEdit",
                component: function () {
                  return n.e(392).then(n.bind(n, 50392));
                },
                meta: { auth: !0 },
              },
              {
                path: "expertSpan",
                component: function () {
                  return n.e(4366).then(n.bind(n, 84366));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "工作台", route: "/" },
                    { name: "专家跨度", route: "" },
                  ],
                },
              },
              {
                path: "insurancePolicyNewAdd",
                component: function () {
                  return n.e(3738).then(n.bind(n, 23738));
                },
                meta: { auth: !0 },
              },
              {
                path: "insurancePolicyNewAddEdit",
                component: function () {
                  return n.e(3156).then(n.bind(n, 53156));
                },
                meta: { auth: !0 },
              },
              {
                path: "viewInsurancePolicy",
                component: function () {
                  return Promise.all([n.e(2138), n.e(4631)]).then(
                    n.bind(n, 75886)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "工作台", route: "/" },
                    { name: "承保信息", route: "" },
                  ],
                },
              },
              {
                path: "userSignOut",
                component: function () {
                  return Promise.all([
                    n.e(6430),
                    n.e(5052),
                    n.e(4814),
                    n.e(4017),
                    n.e(6106),
                  ]).then(n.bind(n, 10444));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "工作台", route: "/" },
                    { name: "服务详情", route: "" },
                  ],
                },
              },
              {
                path: "reportEdit",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(6430),
                    n.e(5052),
                    n.e(4814),
                    n.e(4017),
                    n.e(2868),
                  ]).then(n.bind(n, 60698));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "服务", route: "" },
                    { name: "服务详情", route: "" },
                    { name: "服务报告编制", route: "" },
                  ],
                },
              },
              {
                path: "companyDangerAdd",
                component: function () {
                  return n.e(4789).then(n.bind(n, 34789));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "隐患管理", route: "/effectivenessCenter/danger" },
                    { name: "企业隐患", route: "" },
                  ],
                },
              },
              {
                path: "companyDangerReview",
                component: function () {
                  return n.e(1581).then(n.bind(n, 51581));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "隐患管理", route: "/effectivenessCenter/danger" },
                    { name: "企业隐患", route: "" },
                  ],
                },
              },
              {
                path: "CompanyReportMailing",
                component: function () {
                  return n.e(3770).then(n.bind(n, 43770));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "我的待办", route: "/customer/index" },
                    { name: "邮寄备案", route: "" },
                  ],
                },
              },
              {
                path: "companyRiskAddOld",
                component: function () {
                  return n.e(6593).then(n.bind(n, 36593));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "风险管理", route: "/effectivenessCenter/risk" },
                    { name: "企业风险", route: "" },
                  ],
                },
              },
              {
                path: "companyRiskAdd",
                component: function () {
                  return n.e(1112).then(n.bind(n, 41112));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "风险管理", route: "/effectivenessCenter/risk" },
                    { name: "企业风险", route: "" },
                  ],
                },
              },
              {
                path: "companyTrainAdd",
                component: function () {
                  return n.e(6152).then(n.bind(n, 86152));
                },
                meta: { auth: !0 },
              },
              {
                path: "userOrganDetail",
                component: function () {
                  return n.e(8087).then(n.bind(n, 48087));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyView",
                component: function () {
                  return n.e(158).then(n.bind(n, 40158));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyTodoList",
                component: function () {
                  return n.e(8024).then(n.bind(n, 98024));
                },
                meta: { auth: !0 },
              },
              {
                path: "riskControlTodoList",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(6484),
                  ]).then(n.bind(n, 3085));
                },
                meta: { auth: !0 },
              },
              {
                path: "directorControlTodoList",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(391),
                  ]).then(n.bind(n, 30391));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableAndOutView",
                component: function () {
                  return n.e(4760).then(n.bind(n, 94760));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableAndOutViewByZr",
                component: function () {
                  return n.e(1606).then(n.bind(n, 91606));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableRemoveView",
                component: function () {
                  return n.e(4467).then(n.bind(n, 44467));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableAndOutView",
                component: function () {
                  return n.e(4233).then(n.bind(n, 44233));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableAndOutViewByZr",
                component: function () {
                  return n.e(6131).then(n.bind(n, 16131));
                },
                meta: { auth: !0 },
              },
              {
                path: "uploadResearchReport",
                component: function () {
                  return Promise.all([
                    n.e(6430),
                    n.e(5052),
                    n.e(4814),
                    n.e(4017),
                    n.e(1595),
                  ]).then(n.bind(n, 94233));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableRemoveViewByZr",
                component: function () {
                  return n.e(6322).then(n.bind(n, 56322));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableRemove",
                component: function () {
                  return n.e(3931).then(n.bind(n, 93931));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableRemoveView",
                component: function () {
                  return n.e(3498).then(n.bind(n, 13498));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableDataEdit",
                component: function () {
                  return n.e(7624).then(n.bind(n, 57624));
                },
                meta: { auth: !0 },
              },
              {
                path: "proficientProcessEvaluationAdd",
                component: function () {
                  return n.e(2268).then(n.bind(n, 62268));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "我的待办",
                      route: "/workbench/riskControlTodoList",
                    },
                    { name: "过程评价", route: "" },
                  ],
                },
              },
              {
                path: "batchAccept",
                component: function () {
                  return n.e(3623).then(n.bind(n, 73623));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "我的待办", route: "/workbench/dispatchTodoList" },
                    { name: "批量受理", route: "" },
                  ],
                },
              },
              {
                path: "batchSend",
                component: function () {
                  return n.e(1637).then(n.bind(n, 71637));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "我的待办", route: "/workbench/dispatchTodoList" },
                    { name: "批量指派", route: "" },
                  ],
                },
              },
              {
                path: "ProficientEvaluationMonthAdd",
                component: function () {
                  return Promise.all([n.e(7156), n.e(3557)]).then(
                    n.bind(n, 8025)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "我的待办", route: "/workbench/dispatchTodoList" },
                    { name: "专家月度考评", route: "" },
                  ],
                },
              },
              {
                path: "InsurancePolicyAssign",
                component: function () {
                  return n.e(3639).then(n.bind(n, 23639));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "工作台", route: "/" },
                    { name: "接单详情", route: "" },
                  ],
                },
              },
            ],
          },
          {
            name: "知识库",
            path: "/propaganda",
            component: s,
            meta: { auth: !0 },
            children: [
              {
                path: "SecurityInformationList",
                component: function () {
                  return n.e(6764).then(n.bind(n, 46764));
                },
                meta: { auth: !0 },
              },
              {
                path: "EntryNotesList",
                component: function () {
                  return Promise.all([n.e(9116), n.e(60)]).then(
                    n.bind(n, 20060)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "LawsAndRegulationsList",
                component: function () {
                  return Promise.all([n.e(9116), n.e(5086)]).then(
                    n.bind(n, 35086)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertTrainingList",
                component: function () {
                  return n.e(7966).then(n.bind(n, 77966));
                },
                meta: { auth: !0 },
              },
              {
                path: "DangerArticlesList",
                component: function () {
                  return n.e(5458).then(n.bind(n, 25458));
                },
                meta: { auth: !0 },
              },
              {
                path: "SafetyPointsList",
                component: function () {
                  return Promise.all([n.e(9116), n.e(1262)]).then(
                    n.bind(n, 61262)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "SafetyPointsAdd",
                component: function () {
                  return Promise.all([n.e(9116), n.e(9977)]).then(
                    n.bind(n, 39977)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "dangerArticles",
                component: function () {
                  return n.e(2545).then(n.bind(n, 92545));
                },
                meta: { auth: !0 },
              },
              {
                path: "entryNotesEdit",
                component: function () {
                  return Promise.all([n.e(9116), n.e(9244)]).then(
                    n.bind(n, 79244)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "expertTrainingEdit",
                component: function () {
                  return n.e(8634).then(n.bind(n, 68634));
                },
                meta: { auth: !0 },
              },
              {
                path: "lawsAndRegulationsEdit",
                component: function () {
                  return Promise.all([n.e(9116), n.e(5460)]).then(
                    n.bind(n, 25460)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "securityInformationEdit",
                component: function () {
                  return Promise.all([n.e(9116), n.e(770)]).then(
                    n.bind(n, 10770)
                  );
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "测试",
            path: "/test",
            component: s,
            meta: { auth: !0 },
            children: [
              {
                path: "testInput",
                component: function () {
                  return n.e(3508).then(n.bind(n, 23508));
                },
                meta: { auth: !0 },
              },
            ],
          },
        ],
        d = function () {
          return n.e(2630).then(n.bind(n, 2630));
        },
        l = [
          {
            name: "运营管理",
            path: "/operation",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "visitMonitoring",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(8607),
                  ]).then(n.bind(n, 48607));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [{ name: "访问监控", route: "" }],
                },
              },
              {
                path: "serviceMonitoring",
                component: function () {
                  return n.e(9031).then(n.bind(n, 29031));
                },
                meta: { auth: !0 },
              },
              {
                path: "dataManagement",
                component: function () {
                  return n.e(3906).then(n.bind(n, 13906));
                },
                meta: { auth: !0 },
              },
              {
                path: "insurancePolicyImport",
                component: function () {
                  return n.e(1692).then(n.bind(n, 61692));
                },
                meta: { auth: !0 },
              },
              {
                path: "insurancePolicyAdd",
                component: function () {
                  return n.e(3683).then(n.bind(n, 13683));
                },
                meta: { auth: !0 },
              },
              {
                path: "insurancePolicyNewAdd",
                component: function () {
                  return n.e(3738).then(n.bind(n, 23738));
                },
                meta: { auth: !0 },
              },
              {
                path: "riskNewDetail",
                component: function () {
                  return n.e(4204).then(n.bind(n, 54204));
                },
                meta: { auth: !0 },
              },
              {
                path: "dangerNewDetail",
                component: function () {
                  return n.e(5624).then(n.bind(n, 55624));
                },
                meta: { auth: !0 },
              },
              {
                path: "insuranceServiceItemNewDetail",
                component: function () {
                  return n.e(9809).then(n.bind(n, 39809));
                },
                meta: { auth: !0 },
              },
              {
                path: "trainNewDetail",
                component: function () {
                  return n.e(7671).then(n.bind(n, 57671));
                },
                meta: { auth: !0 },
              },
              {
                path: "insurancePolicyNewAddEdit",
                component: function () {
                  return n.e(3156).then(n.bind(n, 53156));
                },
                meta: { auth: !0 },
              },
              {
                path: "compensate",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(570),
                  ]).then(n.bind(n, 60570));
                },
                meta: { auth: !0 },
              },
              {
                path: "compensateNew",
                component: function () {
                  return n.e(315).then(n.bind(n, 20315));
                },
                meta: { auth: !0 },
              },
              {
                path: "serviceNew",
                component: function () {
                  return n.e(8280).then(n.bind(n, 71355));
                },
                meta: { auth: !0 },
              },
              {
                path: "compensateImport",
                component: function () {
                  return n.e(485).then(n.bind(n, 80485));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyList",
                component: function () {
                  return n.e(6448).then(n.bind(n, 26448));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyAdd",
                component: function () {
                  return n.e(3737).then(n.bind(n, 33737));
                },
                meta: { auth: !0 },
              },
              {
                path: "insuranceCompanyAdd",
                component: function () {
                  return n.e(816).then(n.bind(n, 40816));
                },
                meta: { auth: !0 },
              },
              {
                path: "insuranceSubCompanyAdd",
                component: function () {
                  return n.e(5776).then(n.bind(n, 85776));
                },
                meta: { auth: !0 },
              },
              {
                path: "emergencyBureauAdd",
                component: function () {
                  return n.e(9683).then(n.bind(n, 9683));
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationAdd",
                component: function () {
                  return n.e(2224).then(n.bind(n, 12224));
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationView",
                component: function () {
                  return n.e(7373).then(n.bind(n, 77373));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyView",
                component: function () {
                  return n.e(3203).then(n.bind(n, 53203));
                },
                meta: { auth: !0 },
              },
              {
                path: "catalogList",
                component: function () {
                  return n.e(908).then(n.bind(n, 20908));
                },
                meta: { auth: !0 },
              },
              {
                path: "catalogItemCustomAdd",
                component: function () {
                  return n.e(687).then(n.bind(n, 90687));
                },
                meta: { auth: !0 },
              },
              {
                path: "userManagement",
                component: function () {
                  return n.e(9329).then(n.bind(n, 69329));
                },
                meta: { auth: !0 },
              },
              {
                path: "sysUserAdd",
                component: function () {
                  return n.e(7894).then(n.bind(n, 17894));
                },
                meta: { auth: !0 },
              },
              {
                path: "userManagementImport",
                component: function () {
                  return n.e(5265).then(n.bind(n, 65265));
                },
                meta: { auth: !0 },
              },
              {
                path: "logManagement",
                component: function () {
                  return n.e(890).then(n.bind(n, 10890));
                },
                meta: { auth: !0 },
              },
              {
                path: "logManagementView",
                component: function () {
                  return n.e(5096).then(n.bind(n, 35096));
                },
                meta: { auth: !0 },
              },
              {
                path: "knowledgeBase",
                component: function () {
                  return n.e(8709).then(n.bind(n, 18709));
                },
                meta: { auth: !0 },
              },
              {
                path: "backupManagement",
                component: function () {
                  return n.e(8351).then(n.bind(n, 38351));
                },
                meta: { auth: !0 },
              },
              {
                path: "encyclopedias",
                component: function () {
                  return n.e(980).then(n.bind(n, 30980));
                },
                meta: { auth: !0 },
              },
              {
                path: "companyInfo",
                component: function () {
                  return n.e(4637).then(n.bind(n, 44637));
                },
                meta: { auth: !0 },
              },
              {
                path: "SpecialistInfo",
                component: function () {
                  return n.e(8135).then(n.bind(n, 18135));
                },
                meta: { auth: !0 },
              },
              {
                path: "insuranceInstitution",
                component: function () {
                  return n.e(4127).then(n.bind(n, 64127));
                },
                meta: { auth: !0 },
              },
              {
                path: "emergencyBureau",
                component: function () {
                  return n.e(4849).then(n.bind(n, 94849));
                },
                meta: { auth: !0 },
              },
              {
                path: "securityInformationEdit",
                component: function () {
                  return Promise.all([n.e(9116), n.e(770)]).then(
                    n.bind(n, 10770)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "SafetyPointsAdd",
                component: function () {
                  return Promise.all([n.e(9116), n.e(9977)]).then(
                    n.bind(n, 39977)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "dangerArticles",
                component: function () {
                  return n.e(2545).then(n.bind(n, 92545));
                },
                meta: { auth: !0 },
              },
              {
                path: "entryNotesEdit",
                component: function () {
                  return Promise.all([n.e(9116), n.e(9244)]).then(
                    n.bind(n, 79244)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "expertTrainingEdit",
                component: function () {
                  return n.e(8634).then(n.bind(n, 68634));
                },
                meta: { auth: !0 },
              },
              {
                path: "lawsAndRegulationsEdit",
                component: function () {
                  return Promise.all([n.e(9116), n.e(5460)]).then(
                    n.bind(n, 25460)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationYyList",
                component: function () {
                  return n.e(9085).then(n.bind(n, 99085));
                },
                meta: { auth: !0 },
              },
              {
                path: "EvaluationCriteriaImport",
                component: function () {
                  return n.e(4524).then(n.bind(n, 4524));
                },
                meta: { auth: !0 },
              },
              {
                path: "EvaluationCriteriaEditList",
                component: function () {
                  return n.e(1884).then(n.bind(n, 51884));
                },
                meta: { auth: !0 },
              },
              {
                path: "EvaluationCriteriaEdit",
                component: function () {
                  return n.e(3852).then(n.bind(n, 63852));
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationList",
                component: function () {
                  return n.e(3301).then(n.bind(n, 53301));
                },
                meta: { auth: !0 },
              },
              {
                path: "userOrganDetail",
                component: function () {
                  return n.e(8087).then(n.bind(n, 48087));
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationBan",
                component: function () {
                  return n.e(9958).then(n.bind(n, 29958));
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationBanLog",
                component: function () {
                  return n.e(1519).then(n.bind(n, 56652));
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationBanView",
                component: function () {
                  return n.e(17).then(n.bind(n, 20017));
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "信息公开",
            path: "/infoDisclosure",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "index",
                component: function () {
                  return n.e(726).then(n.bind(n, 88977));
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "结算中心",
            path: "/balanceCenter",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "insuranceCompanyBill",
                component: function () {
                  return n.e(3104).then(n.bind(n, 43104));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "结算中心", route: "" },
                    { name: "发起账单", route: "" },
                  ],
                },
              },
              {
                path: "insuranceCompanyBillData",
                component: function () {
                  return n.e(1355).then(n.bind(n, 11355));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "结算中心", route: "" },
                    { name: "账单详情", route: "" },
                  ],
                },
              },
              {
                path: "insuranceCompanyOrganBill",
                component: function () {
                  return n.e(8759).then(n.bind(n, 68759));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "结算中心", route: "" },
                    { name: "账单详情", route: "" },
                  ],
                },
              },
              {
                path: "BalanceServiceOrganBillList",
                component: function () {
                  return n.e(1458).then(n.bind(n, 61458));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceServiceOrganBillListNew",
                component: function () {
                  return n.e(6680).then(n.bind(n, 86680));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceServiceOrganBillList1",
                component: function () {
                  return n.e(6073).then(n.bind(n, 16073));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceServiceOrganBillList2",
                component: function () {
                  return n.e(4210).then(n.bind(n, 24210));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceServiceOrganBillList3",
                component: function () {
                  return n.e(5318).then(n.bind(n, 5318));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceServiceOrganBillListBatch",
                component: function () {
                  return n.e(9094).then(n.bind(n, 39094));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceServiceItemAllList",
                component: function () {
                  return n.e(6279).then(n.bind(n, 66279));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceInsuranceCompanyBillList",
                component: function () {
                  return n.e(3104).then(n.bind(n, 43104));
                },
                meta: { auth: !0 },
              },
              {
                path: "InsuranceCompanyBillList",
                component: function () {
                  return n.e(9931).then(n.bind(n, 79931));
                },
                meta: { auth: !0 },
              },
              {
                path: "InsuranceCompanyBillAll",
                component: function () {
                  return n.e(8539).then(n.bind(n, 78539));
                },
                meta: { auth: !0 },
              },
              {
                path: "BalanceDirectorBillList",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(7127),
                  ]).then(n.bind(n, 97127));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountExpenditureList",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(5459),
                  ]).then(n.bind(n, 15459));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountExpenditureAdd",
                component: function () {
                  return n.e(7414).then(n.bind(n, 27414));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountExpenditureDetail",
                component: function () {
                  return n.e(5416).then(n.bind(n, 55416));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountIncomeList",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(691),
                  ]).then(n.bind(n, 691));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountIncomeAdd",
                component: function () {
                  return n.e(8884).then(n.bind(n, 18884));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountIncomeDetail",
                component: function () {
                  return n.e(3147).then(n.bind(n, 43147));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountExpenditureDetailList",
                component: function () {
                  return n.e(5317).then(n.bind(n, 95317));
                },
                meta: { auth: !0 },
              },
              {
                path: "AccountIncomeDetailList",
                component: function () {
                  return n.e(8961).then(n.bind(n, 58961));
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "客服中心",
            path: "/customer",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "index",
                component: function () {
                  return n.e(966).then(n.bind(n, 40966));
                },
                meta: { auth: !0 },
              },
              {
                path: "forceSignOutProcessEvaluationAdd",
                component: function () {
                  return n.e(7343).then(n.bind(n, 47343));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "首页", route: "/customer/index" },
                    { name: "强制签出评价", route: "" },
                  ],
                },
              },
              {
                path: "visitProcessEvaluationAdd",
                component: function () {
                  return n.e(5278).then(n.bind(n, 45278));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "首页", route: "/customer/index" },
                    { name: "客户回访备案", route: "" },
                  ],
                },
              },
              {
                path: "insurancePolicyVisitAdd",
                component: function () {
                  return n.e(453).then(n.bind(n, 20453));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "首页", route: "/customer/index" },
                    { name: "保单回访", route: "" },
                  ],
                },
              },
              {
                path: "insurancePolicyVisitView",
                component: function () {
                  return Promise.all([n.e(2138), n.e(958)]).then(
                    n.bind(n, 33565)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "首页", route: "/customer/index" },
                    { name: "保单回访", route: "" },
                  ],
                },
              },
              {
                path: "mailingList",
                component: function () {
                  return n.e(2263).then(n.bind(n, 91572));
                },
                meta: { auth: !0 },
              },
              {
                path: "reportList",
                component: function () {
                  return n.e(4474).then(n.bind(n, 34474));
                },
                meta: { auth: !0 },
              },
              {
                path: "GuestComplaint",
                component: function () {
                  return n.e(447).then(n.bind(n, 20447));
                },
                meta: { auth: !0 },
              },
              {
                path: "GuestComplaintAdd",
                component: function () {
                  return n.e(2183).then(n.bind(n, 32183));
                },
                meta: { auth: !0 },
              },
              {
                path: "forceSignOutList",
                component: function () {
                  return n.e(6417).then(n.bind(n, 46417));
                },
                meta: { auth: !0 },
              },
              {
                path: "visitProcessList",
                component: function () {
                  return n.e(7173).then(n.bind(n, 37173));
                },
                meta: { auth: !0 },
              },
              {
                path: "itemEvaluationAdd",
                component: function () {
                  return Promise.all([n.e(2092), n.e(9091)]).then(
                    n.bind(n, 66774)
                  );
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "市场中心",
            path: "/marketCenter",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "index",
                component: function () {
                  return n.e(2935).then(n.bind(n, 82935));
                },
                meta: { auth: !0 },
              },
              {
                path: "InsuranceInstitutions",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(429),
                  ]).then(n.bind(n, 50429));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganManage",
                component: function () {
                  return n.e(3297).then(n.bind(n, 13297));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganHandle",
                component: function () {
                  return n.e(9464).then(n.bind(n, 19464));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganHandle1",
                component: function () {
                  return n.e(2580).then(n.bind(n, 52580));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertManage",
                component: function () {
                  return n.e(5291).then(n.bind(n, 35291));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertHandle",
                component: function () {
                  return n.e(5072).then(n.bind(n, 55825));
                },
                meta: { auth: !0 },
              },
              {
                path: "SpecialistSysUser",
                component: function () {
                  return n.e(2480).then(n.bind(n, 32480));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganizationDetail",
                component: function () {
                  return Promise.all([n.e(3893), n.e(3166)]).then(
                    n.bind(n, 88121)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableAndOutView",
                component: function () {
                  return n.e(4760).then(n.bind(n, 94760));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableAndOutView",
                component: function () {
                  return n.e(4233).then(n.bind(n, 44233));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableRemoveView",
                component: function () {
                  return n.e(3498).then(n.bind(n, 13498));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableDataEdit",
                component: function () {
                  return n.e(2607).then(n.bind(n, 95460));
                },
                meta: { auth: !0 },
              },
              {
                path: "organDisableRemove",
                component: function () {
                  return n.e(8267).then(n.bind(n, 88267));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDetail",
                component: function () {
                  return n.e(6540).then(n.bind(n, 86540));
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "智能报表",
            path: "/intelligentReport",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "index",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(7374),
                  ]).then(n.bind(n, 27374));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "智能报表", route: "" },
                    { name: "安全风险报告", route: "" },
                  ],
                },
              },
              {
                path: "service",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(1120),
                    n.e(8792),
                  ]).then(n.bind(n, 78792));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "智能报表", route: "" },
                    { name: "服务报告", route: "" },
                  ],
                },
              },
              {
                path: "search",
                component: function () {
                  return n.e(2573).then(n.bind(n, 72573));
                },
                meta: { auth: !0 },
              },
              {
                path: "situation_count",
                component: function () {
                  return n.e(2778).then(n.bind(n, 42778));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "智能报表", route: "" },
                    { name: "情况通报表", route: "" },
                  ],
                },
              },
              {
                path: "service_count",
                component: function () {
                  return n.e(9631).then(n.bind(n, 59631));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "智能报表", route: "" },
                    { name: "服务情况表", route: "" },
                  ],
                },
              },
              {
                path: "enterprise_count",
                component: function () {
                  return n.e(1196).then(n.bind(n, 41082));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "智能报表", route: "" },
                    { name: "企业情况表", route: "" },
                  ],
                },
              },
              {
                path: "work",
                component: function () {
                  return Promise.all([
                    n.e(8927),
                    n.e(7932),
                    n.e(925),
                    n.e(8696),
                    n.e(5698),
                    n.e(5509),
                    n.e(7545),
                    n.e(1120),
                    n.e(5811),
                  ]).then(n.bind(n, 85811));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    { name: "智能报表", route: "" },
                    { name: "工作汇报报告", route: "" },
                  ],
                },
              },
            ],
          },
          {
            name: "监管中心",
            path: "/regulatoryCenter",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "index",
                component: function () {
                  return n.e(6324).then(n.bind(n, 56324));
                },
                meta: { auth: !0 },
              },
            ],
          },
          {
            name: "服务全过程记录查看",
            path: "/insure",
            component: d,
            meta: { auth: !0 },
            children: [
              {
                path: "companyDangerLogView",
                component: function () {
                  return n.e(2999).then(n.bind(n, 42999));
                },
                meta: { auth: !0 },
              },
            ],
          },
        ],
        f = [
          {
            name: "注册",
            path: "/register",
            redirect: "/register/RIR",
            component: function () {
              return n.e(7222).then(n.bind(n, 67222));
            },
            meta: { auth: !1 },
            children: [
              {
                name: "机构注册",
                path: "RIR",
                meta: { auth: !1 },
                component: function () {
                  return n.e(882).then(n.bind(n, 80882));
                },
              },
              {
                name: "专家注册",
                path: "expertR",
                meta: { auth: !1 },
                component: function () {
                  return n.e(3534).then(n.bind(n, 73534));
                },
              },
            ],
          },
          {
            name: "用户协议",
            path: "/clause",
            component: function () {
              return n.e(2501).then(n.bind(n, 82501));
            },
            meta: { auth: !1 },
          },
          {
            name: "专家注册详情",
            path: "/ExpertRegisterItem",
            meta: { auth: !1 },
            component: function () {
              return n.e(2763).then(n.bind(n, 42763));
            },
          },
          {
            name: "机构注册详情",
            path: "/SpeciaRegisterItem",
            meta: { auth: !1 },
            component: function () {
              return n.e(4906).then(n.bind(n, 4906));
            },
          },
          {
            name: "隐私权政策",
            path: "/privacy",
            component: function () {
              return n.e(9721).then(n.bind(n, 19721));
            },
            meta: { auth: !1 },
          },
          {
            name: "机构",
            path: "/organ",
            component: function () {
              return n.e(2630).then(n.bind(n, 2630));
            },
            meta: { auth: !1 },
            children: [
              {
                name: "机构负责人审批注册",
                path: "logonExpertItemByfz",
                meta: { auth: !1 },
                component: function () {
                  return n.e(7170).then(n.bind(n, 57170));
                },
              },
              {
                name: "机构负责人审批",
                path: "appointmentUserByFZ",
                meta: { auth: !1 },
                component: function () {
                  return n.e(3175).then(n.bind(n, 93175));
                },
              },
            ],
          },
        ],
        g = [
          {
            name: "后台管理",
            path: "/backstageManagement",
            component: function () {
              return n.e(2630).then(n.bind(n, 2630));
            },
            meta: { auth: !0 },
            children: [
              {
                path: "Test1",
                component: function () {
                  return n.e(264).then(n.bind(n, 70264));
                },
                meta: { auth: !0 },
              },
            ],
          },
        ],
        b = [
          {
            name: "项目考评",
            path: "/assessmentCenter",
            component: function () {
              return n.e(2630).then(n.bind(n, 2630));
            },
            meta: { auth: !0 },
            children: [
              {
                path: "itemEvaluation",
                component: function () {
                  return n.e(6400).then(n.bind(n, 56400));
                },
                meta: { auth: !0 },
              },
              {
                path: "itemEvaluationAdd",
                component: function () {
                  return Promise.all([n.e(2092), n.e(9091)]).then(
                    n.bind(n, 66774)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "项目考评",
                      route: "/assessmentCenter/itemEvaluation",
                    },
                    { name: "项目考评详情", route: "" },
                  ],
                },
              },
              {
                path: "itemEvaluationHistory",
                component: function () {
                  return Promise.all([n.e(2092), n.e(9326)]).then(
                    n.bind(n, 33572)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "项目考评",
                      route: "/assessmentCenter/itemEvaluation",
                    },
                    { name: "项目考评历史详情", route: "" },
                  ],
                },
              },
              {
                path: "insuranceCompanyEvaluation",
                component: function () {
                  return n.e(6351).then(n.bind(n, 56351));
                },
                meta: { auth: !0 },
              },
              {
                path: "insuranceCompanyEvaluationDetail",
                component: function () {
                  return n.e(7279).then(n.bind(n, 47279));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "保险考评",
                      route: "/assessmentCenter/insuranceCompanyEvaluation",
                    },
                    { name: "保险考评详情", route: "" },
                  ],
                },
              },
              {
                path: "insuranceCompanyEvaluationAdd",
                component: function () {
                  return n.e(8588).then(n.bind(n, 28588));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "保险考评",
                      route: "/assessmentCenter/insuranceCompanyEvaluation",
                    },
                    { name: "保险考评详情", route: "" },
                  ],
                },
              },
              {
                path: "proficientEvaluation",
                component: function () {
                  return n.e(4890).then(n.bind(n, 14890));
                },
                meta: { auth: !0 },
              },
              {
                path: "proficientEvaluationMonthAdd",
                component: function () {
                  return Promise.all([n.e(7156), n.e(3557)]).then(
                    n.bind(n, 8025)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "专家考评",
                      route: "/assessmentCenter/proficientEvaluation",
                    },
                    { name: "专家考评详情", route: "" },
                  ],
                },
              },
              {
                path: "proficientEvaluationYearAdd",
                component: function () {
                  return n.e(694).then(n.bind(n, 694));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "专家考评",
                      route: "/assessmentCenter/proficientEvaluation",
                    },
                    { name: "专家考评详情", route: "" },
                  ],
                },
              },
              {
                path: "proficientEvaluationMonthHistory",
                component: function () {
                  return Promise.all([n.e(7156), n.e(7219)]).then(
                    n.bind(n, 58643)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "专家考评",
                      route: "/assessmentCenter/proficientEvaluation",
                    },
                    { name: "专家考评历史详情", route: "" },
                  ],
                },
              },
              {
                path: "proficientEvaluationYearHistory",
                component: function () {
                  return n.e(4018).then(n.bind(n, 54018));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "专家考评",
                      route: "/assessmentCenter/proficientEvaluation",
                    },
                    { name: "专家考评历史详情", route: "" },
                  ],
                },
              },
              {
                path: "organizationEvaluation",
                component: function () {
                  return n.e(97).then(n.bind(n, 90097));
                },
                meta: { auth: !0 },
              },
              {
                path: "organizationEvaluationMonthAdd",
                component: function () {
                  return Promise.all([n.e(3893), n.e(7757)]).then(
                    n.bind(n, 13893)
                  );
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "机构考评",
                      route: "/assessmentCenter/organizationEvaluation",
                    },
                    { name: "机构考评详情", route: "" },
                  ],
                },
              },
              {
                path: "organizationEvaluationYearAdd",
                component: function () {
                  return n.e(5798).then(n.bind(n, 45798));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "机构考评",
                      route: "/assessmentCenter/organizationEvaluation",
                    },
                    { name: "机构考评详情", route: "" },
                  ],
                },
              },
              {
                path: "organizationEvaluationMonthHistory",
                component: function () {
                  return n.e(7473).then(n.bind(n, 7473));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "机构考评",
                      route: "/assessmentCenter/organizationEvaluation",
                    },
                    { name: "机构考评历史详情", route: "" },
                  ],
                },
              },
              {
                path: "organizationEvaluationYearHistory",
                component: function () {
                  return n.e(7273).then(n.bind(n, 87273));
                },
                meta: {
                  auth: !0,
                  breadcrumb: [
                    {
                      name: "机构考评",
                      route: "/assessmentCenter/organizationEvaluation",
                    },
                    { name: "机构考评历史详情", route: "" },
                  ],
                },
              },
              {
                path: "organDisableList",
                component: function () {
                  return n.e(9691).then(n.bind(n, 39691));
                },
                meta: { auth: !0 },
              },
              {
                path: "organDisableData",
                component: function () {
                  return n.e(6795).then(n.bind(n, 56795));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableDataEdit",
                component: function () {
                  return n.e(2607).then(n.bind(n, 95460));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableFlow",
                component: function () {
                  return n.e(8553).then(n.bind(n, 38553));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganOutFlow",
                component: function () {
                  return n.e(3954).then(n.bind(n, 43954));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableAndOutView",
                component: function () {
                  return n.e(4760).then(n.bind(n, 94760));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganDisableAndOutViewByZr",
                component: function () {
                  return n.e(1606).then(n.bind(n, 91606));
                },
                meta: { auth: !0 },
              },
              {
                path: "OrganizationDetail",
                component: function () {
                  return Promise.all([n.e(3893), n.e(3166)]).then(
                    n.bind(n, 88121)
                  );
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableData",
                component: function () {
                  return n.e(7115).then(n.bind(n, 7115));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableDataEdit",
                component: function () {
                  return n.e(7624).then(n.bind(n, 57624));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableList",
                component: function () {
                  return n.e(5658).then(n.bind(n, 15658));
                },
                meta: { auth: !0 },
              },
              {
                path: "ExpertDisableFlow",
                component: function () {
                  return n.e(3447).then(n.bind(n, 13447));
                },
                meta: { auth: !0 },
              },
              {
                path: "index",
                component: function () {
                  return n.e(3086).then(n.bind(n, 73086));
                },
                meta: { auth: !0 },
              },
              {
                path: "listManagement",
                component: function () {
                  return n.e(765).then(n.bind(n, 80765));
                },
                meta: { auth: !0 },
              },
              {
                path: "AbilityTestList",
                component: function () {
                  return n.e(8772).then(n.bind(n, 48772));
                },
                meta: { auth: !0 },
              },
              {
                path: "AbilityTest",
                component: function () {
                  return n.e(9952).then(n.bind(n, 49952));
                },
                meta: { auth: !0 },
              },
              {
                path: "EvaluateList",
                component: function () {
                  return n.e(4599).then(n.bind(n, 74599));
                },
                meta: { auth: !0 },
              },
              {
                path: "EvaluateView",
                component: function () {
                  return n.e(6296).then(n.bind(n, 66296));
                },
                meta: { auth: !0 },
              },
              {
                path: "ItemEvaluationTest",
                component: function () {
                  return Promise.all([n.e(5946), n.e(7089)]).then(
                    n.bind(n, 88626)
                  );
                },
                meta: { auth: !0 },
              },
            ],
          },
        ],
        v = [];
      function E(e) {
        if (0 === v.length) return v.concat(e);
        for (var t = [], n = 0, a = e.length; n < a; n++) {
          for (var r = !1, o = e[n], i = 0, u = v.length; i < u; i++) {
            var c = v[i];
            if (c.path === o.path) {
              (r = !0), (c.children = c.children.concat(o.children));
              break;
            }
          }
          r || t.push(o);
        }
        return v.concat(t);
      }
      (v = E([
        {
          path: "/login",
          component: function () {
            return n.e(3989).then(n.bind(n, 63989));
          },
          meta: { auth: !1 },
        },
        {
          path: "/bigScreenOverview",
          component: function () {
            return Promise.all([
              n.e(8927),
              n.e(7932),
              n.e(925),
              n.e(8696),
              n.e(5698),
              n.e(5509),
              n.e(7545),
              n.e(1717),
            ]).then(n.bind(n, 61717));
          },
          meta: { auth: !1 },
        },
        {
          path: "/bigScreenRisk",
          component: function () {
            return Promise.all([
              n.e(8927),
              n.e(7932),
              n.e(925),
              n.e(8696),
              n.e(5698),
              n.e(5509),
              n.e(7545),
              n.e(3972),
            ]).then(n.bind(n, 43972));
          },
          meta: { auth: !1 },
        },
        { path: "/", redirect: "/home", meta: { auth: !0 } },
        { path: "/index", redirect: "/home", meta: { auth: !0 } },
        {
          path: "/home",
          component: function () {
            return n.e(5050).then(n.bind(n, 65050));
          },
          meta: { auth: !0 },
        },
        {
          path: "/goWx",
          component: function () {
            return n.e(6e3).then(n.bind(n, 76e3));
          },
          meta: { auth: !1 },
        },
        {
          name: "工作台",
          path: "/workbench",
          component: o,
          meta: { auth: !0 },
          children: [
            {
              path: "insuranceCompanyIndex",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(167),
                  n.e(5165),
                ]).then(n.bind(n, 30451));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyMonitorIndex",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(167),
                  n.e(5853),
                  n.e(3700),
                ]).then(n.bind(n, 58784));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyMonitorTable",
              component: function () {
                return n.e(1594).then(n.bind(n, 91594));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyCalendar",
              component: function () {
                return n.e(8471).then(n.bind(n, 59653));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceManagement",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(1082),
                ]).then(n.bind(n, 11082));
              },
              meta: { auth: !0 },
            },
            {
              path: "InsuranceManagementLeader",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(9150),
                ]).then(n.bind(n, 59150));
              },
              meta: { auth: !0 },
            },
            {
              path: "InsuranceManagementManagerMy",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(1442),
                ]).then(n.bind(n, 11442));
              },
              meta: { auth: !0 },
            },
            {
              path: "InsuranceManagementManagerBranch",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(3225),
                ]).then(n.bind(n, 53225));
              },
              meta: { auth: !0 },
            },
            {
              path: "InsuranceManagementManagerRegion",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(8454),
                ]).then(n.bind(n, 98454));
              },
              meta: { auth: !0 },
            },
            {
              path: "underwritingQuotation",
              component: function () {
                return Promise.all([n.e(4581), n.e(4614)]).then(
                  n.bind(n, 4614)
                );
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyPrevent",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(4141),
                ]).then(n.bind(n, 4141));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyExport",
              component: function () {
                return n.e(5991).then(n.bind(n, 85991));
              },
              meta: { auth: !0 },
            },
            {
              path: "compensate",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(9516),
                ]).then(n.bind(n, 19516));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyCustomer",
              component: function () {
                return n.e(5641).then(n.bind(n, 95641));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyManagement",
              component: function () {
                return n.e(439).then(n.bind(n, 40439));
              },
              meta: { auth: !0 },
            },
            {
              path: "exportLog",
              component: function () {
                return n.e(6798).then(n.bind(n, 46798));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "导出", route: "" },
                  { name: "导出日志", route: "" },
                ],
              },
            },
            {
              path: "ServiceCenterIndex",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(167),
                  n.e(5853),
                  n.e(2490),
                ]).then(n.bind(n, 45444));
              },
              meta: { auth: !0 },
            },
            {
              path: "dispatchTodoList",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(167),
                  n.e(5788),
                ]).then(n.bind(n, 76662));
              },
              meta: { auth: !0 },
            },
            {
              path: "distributeTodoList",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(3399),
                ]).then(n.bind(n, 93399));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCenterPrevent",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(8757),
                ]).then(n.bind(n, 58757));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCenterSupervise",
              component: function () {
                return n.e(5306).then(n.bind(n, 65306));
              },
              meta: { auth: !0 },
            },
            {
              path: "reportSpotCheckAdd",
              component: function () {
                return n.e(1413).then(n.bind(n, 11413));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  {
                    name: "监督协同",
                    route: "/workbench/serviceCenterSupervise",
                  },
                  { name: "报告抽查", route: "" },
                ],
              },
            },
            {
              path: "reportSpotUnderCheckAdd",
              component: function () {
                return n.e(2770).then(n.bind(n, 2770));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  {
                    name: "监督协同",
                    route: "/workbench/serviceCenterSupervise",
                  },
                  { name: "报告抽查", route: "" },
                ],
              },
            },
            {
              path: "SupervisionCoordinationAdd",
              component: function () {
                return n.e(8096).then(n.bind(n, 58096));
              },
              meta: { auth: !0 },
            },
            {
              path: "companyInfo",
              component: function () {
                return n.e(5520).then(n.bind(n, 65520));
              },
              meta: { auth: !0 },
            },
            {
              path: "dockingData",
              component: function () {
                return n.e(4845).then(n.bind(n, 54845));
              },
              meta: { auth: !0 },
            },
            {
              path: "fiveCateGories",
              component: function () {
                return n.e(3136).then(n.bind(n, 33136));
              },
              meta: { auth: !0 },
            },
            {
              path: "historyData",
              component: function () {
                return n.e(5676).then(n.bind(n, 5676));
              },
              meta: { auth: !0 },
            },
            {
              path: "fiveStatistics",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(1242),
                ]).then(n.bind(n, 81242));
              },
              meta: { auth: !0 },
            },
            {
              path: "riskReportTemplate",
              component: function () {
                return n.e(7831).then(n.bind(n, 57831));
              },
              meta: { auth: !0 },
            },
            {
              path: "dangerReportTemplate",
              component: function () {
                return n.e(1317).then(n.bind(n, 61317));
              },
              meta: { auth: !0 },
            },
            {
              path: "fiveCompanyName",
              component: function () {
                return n.e(2024).then(n.bind(n, 22024));
              },
              meta: { auth: !0 },
            },
            {
              path: "organizationList",
              component: function () {
                return n.e(3301).then(n.bind(n, 53301));
              },
              meta: { auth: !0 },
            },
            {
              path: "AppointmentUserEdit",
              component: function () {
                return n.e(8615).then(n.bind(n, 98615));
              },
              meta: { auth: !0 },
            },
            {
              path: "AppointmentEdit",
              component: function () {
                return n.e(1213).then(n.bind(n, 41213));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyList",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(6717),
                ]).then(n.bind(n, 6717));
              },
              meta: { auth: !0 },
            },
            {
              path: "SchemeConfirmation",
              component: function () {
                return Promise.all([n.e(2138), n.e(2941)]).then(
                  n.bind(n, 36571)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "发起服务", route: "" },
                ],
              },
            },
            {
              path: "SchemeConfirmationV2",
              component: function () {
                return Promise.all([n.e(2138), n.e(418)]).then(
                  n.bind(n, 67736)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "发起服务", route: "" },
                ],
              },
            },
            {
              path: "ConfigPolicy",
              component: function () {
                return Promise.all([n.e(2138), n.e(5602)]).then(
                  n.bind(n, 26986)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "发起服务", route: "" },
                ],
              },
            },
            {
              path: "acceptInsurancePolicy",
              component: function () {
                return Promise.all([n.e(2138), n.e(1374)]).then(
                  n.bind(n, 87225)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "承保信息", route: "" },
                ],
              },
            },
            {
              path: "serviceItemByBD",
              component: function () {
                return Promise.all([n.e(2138), n.e(4768)]).then(
                  n.bind(n, 71076)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "服务列表", route: "" },
                ],
              },
            },
            {
              path: "serviceItemByBD1",
              component: function () {
                return Promise.all([n.e(2138), n.e(5039)]).then(
                  n.bind(n, 58342)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "服务列表", route: "" },
                ],
              },
            },
            {
              path: "serviceCompanyCalendar",
              component: function () {
                return n.e(8471).then(n.bind(n, 59653));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCompanyIndex",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(167),
                  n.e(8616),
                ]).then(n.bind(n, 51064));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCompanyHome",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(167),
                  n.e(8925),
                ]).then(n.bind(n, 44024));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCompanyUserAccept",
              component: function () {
                return Promise.all([n.e(2138), n.e(1184)]).then(
                  n.bind(n, 44205)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "承保信息", route: "" },
                ],
              },
            },
            {
              path: "serviceCompanyPrevent",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(7927),
                ]).then(n.bind(n, 7927));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCompanyQuality",
              component: function () {
                return n.e(5942).then(n.bind(n, 25942));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCompanyInfo",
              component: function () {
                return n.e(2002).then(n.bind(n, 62002));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCompanyManagement",
              component: function () {
                return n.e(322).then(n.bind(n, 20322));
              },
              meta: { auth: !0 },
            },
            {
              path: "appointmentAdd",
              component: function () {
                return n.e(1731).then(n.bind(n, 21731));
              },
              meta: { auth: !0 },
            },
            {
              path: "appointmentUserAdd",
              component: function () {
                return n.e(41).then(n.bind(n, 41));
              },
              meta: { auth: !0 },
            },
            {
              path: "OrganizationEvaluationMonthAdd",
              component: function () {
                return Promise.all([n.e(3893), n.e(7757)]).then(
                  n.bind(n, 13893)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "我的待办", route: "/workbench/dispatchTodoList" },
                  { name: "机构考核", route: "" },
                ],
              },
            },
            {
              path: "OrganizationEvaluationYearAdd",
              component: function () {
                return n.e(5798).then(n.bind(n, 45798));
              },
              meta: { auth: !0 },
            },
            {
              path: "sysUserAdd",
              component: function () {
                return n.e(8977).then(n.bind(n, 8977));
              },
              meta: { auth: !0 },
            },
            {
              path: "InsuranceCompanyEvaluationAdd",
              component: function () {
                return n.e(8293).then(n.bind(n, 78293));
              },
              meta: { auth: !0 },
            },
            {
              path: "organizationEvaluationMonthAdd",
              component: function () {
                return Promise.all([n.e(3893), n.e(7757)]).then(
                  n.bind(n, 13893)
                );
              },
              meta: { auth: !0 },
            },
            {
              path: "insureReceive",
              component: function () {
                return Promise.all([n.e(2138), n.e(5900)]).then(
                  n.bind(n, 97026)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "我的待办", route: "/workbench/dispatchTodoList" },
                  { name: "承保信息", route: "" },
                ],
              },
            },
            {
              path: "assignTasks",
              component: function () {
                return Promise.all([n.e(2138), n.e(8441)]).then(
                  n.bind(n, 96664)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "承保信息", route: "" },
                ],
              },
            },
            {
              path: "userSignIn",
              component: function () {
                return Promise.all([
                  n.e(6430),
                  n.e(5052),
                  n.e(4814),
                  n.e(4017),
                  n.e(5569),
                ]).then(n.bind(n, 23755));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "工作台", route: "/" },
                  { name: "服务详情", route: "" },
                ],
              },
            },
            {
              path: "serviceCenterSampling",
              component: function () {
                return n.e(6897).then(n.bind(n, 26897));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCenterOnlineSampling",
              component: function () {
                return n.e(7331).then(n.bind(n, 87331));
              },
              meta: { auth: !0 },
            },
            {
              path: "serviceCenterOfflineSampling",
              component: function () {
                return n.e(32).then(n.bind(n, 32));
              },
              meta: { auth: !0 },
            },
          ],
        },
        {
          name: "服务中心",
          path: "/serviceCenter",
          component: o,
          meta: { auth: !0 },
          children: [
            {
              path: "index",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(167),
                  n.e(5165),
                ]).then(n.bind(n, 30451));
              },
              meta: { auth: !0 },
            },
            {
              path: "todoList",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(3399),
                ]).then(n.bind(n, 93399));
              },
              meta: { auth: !0 },
            },
            {
              path: "InsurancePolicyDetails",
              component: function () {
                return Promise.all([n.e(2138), n.e(2987)]).then(
                  n.bind(n, 13135)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "承保管理", route: "/workbench/insuranceManagement" },
                  { name: "承保信息", route: "" },
                ],
              },
            },
            {
              path: "InsurancePolicyImportDetails",
              component: function () {
                return n.e(6799).then(n.bind(n, 36799));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "承保管理", route: "/workbench/insuranceManagement" },
                  { name: "导入保单信息", route: "" },
                ],
              },
            },
            {
              path: "InsurancePolicyImportDetails1",
              component: function () {
                return n.e(7359).then(n.bind(n, 97359));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "承保管理", route: "/workbench/insuranceManagement" },
                  { name: "导入保单信息", route: "" },
                ],
              },
            },
            {
              path: "InsurancePolicyAudit",
              component: function () {
                return Promise.all([n.e(2138), n.e(8174)]).then(
                  n.bind(n, 89248)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "我的待办", route: "/workbench/dispatchTodoList" },
                  { name: "承保信息", route: "" },
                ],
              },
            },
            {
              path: "compensateAdd",
              component: function () {
                return n.e(5383).then(n.bind(n, 65383));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "理赔管理", route: "/workbench/compensate" },
                  { name: "保险理赔", route: "" },
                ],
              },
            },
            {
              path: "CustomerDetail",
              component: function () {
                return n.e(5346).then(n.bind(n, 25346));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "一企一档", route: "/workbench/companyInfo" },
                  { name: "企业详情", route: "" },
                ],
              },
            },
            {
              path: "OrganizationDetail",
              component: function () {
                return Promise.all([n.e(3893), n.e(3166)]).then(
                  n.bind(n, 88121)
                );
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "服务机构", route: "/workbench/organizationList" },
                  { name: "机构详情", route: "" },
                ],
              },
            },
            {
              path: "preventDetail",
              component: function () {
                return Promise.all([
                  n.e(6430),
                  n.e(5052),
                  n.e(4814),
                  n.e(4017),
                  n.e(5946),
                  n.e(8790),
                ]).then(n.bind(n, 95195));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  {
                    name: "预防服务",
                    route: "/workbench/serviceCenterPrevent",
                  },
                  { name: "服务项目详情", route: "" },
                ],
              },
            },
            {
              path: "ServiceCalendar",
              component: function () {
                return Promise.all([n.e(167), n.e(5853), n.e(6666)]).then(
                  n.bind(n, 60356)
                );
              },
              meta: { auth: !0 },
            },
            {
              path: "ExpertDisableRemove",
              component: function () {
                return n.e(3931).then(n.bind(n, 93931));
              },
              meta: { auth: !0 },
            },
            {
              path: "map",
              component: function () {
                return n.e(5750).then(n.bind(n, 25750));
              },
              meta: { auth: !0 },
            },
            {
              name: "过程评价",
              path: "OrganizationProcessEvaluationAdd",
              meta: {
                auth: !1,
                breadcrumb: [
                  { name: "我的待办", route: "" },
                  { name: "过程评价", route: "" },
                ],
              },
              component: function () {
                return n.e(3106).then(n.bind(n, 53106));
              },
            },
            {
              path: "ExpertDetail",
              component: function () {
                return n.e(6540).then(n.bind(n, 86540));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "服务机构", route: "/workbench/organizationList" },
                  { name: "专家详情", route: "" },
                ],
              },
            },
            {
              path: "AppointmentUserForm",
              component: function () {
                return n.e(3322).then(n.bind(n, 43322));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "服务机构", route: "/workbench/organizationList" },
                  { name: "合约详情", route: "" },
                ],
              },
            },
            {
              path: "ManagementUser",
              component: function () {
                return n.e(5902).then(n.bind(n, 35902));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "服务机构", route: "/workbench/organizationList" },
                  { name: "专家详情", route: "" },
                ],
              },
            },
            {
              path: "InstitutionalAccessItem",
              component: function () {
                return n.e(8013).then(n.bind(n, 18013));
              },
              meta: { auth: !0 },
            },
            {
              path: "appointmentItem",
              component: function () {
                return n.e(3402).then(n.bind(n, 83402));
              },
              meta: { auth: !0 },
            },
            {
              path: "logonExpertItem",
              component: function () {
                return n.e(6567).then(n.bind(n, 46567));
              },
              meta: { auth: !0 },
            },
            {
              path: "ExpertEdit",
              component: function () {
                return n.e(8851).then(n.bind(n, 48851));
              },
              meta: { auth: !0 },
            },
            {
              path: "AbilityTest",
              component: function () {
                return n.e(9952).then(n.bind(n, 49952));
              },
              meta: { auth: !0 },
            },
          ],
        },
        {
          name: "成效中心",
          path: "/effectivenessCenter",
          component: o,
          meta: { auth: !0 },
          children: [
            {
              path: "index",
              component: function () {
                return n.e(9460).then(n.bind(n, 39460));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "成效中心", route: "" },
                  { name: "风险一张图", route: "" },
                ],
              },
            },
            {
              path: "danger",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(468),
                ]).then(n.bind(n, 60468));
              },
              meta: { auth: !0, breadcrumb: [] },
            },
            {
              path: "dangerDetail",
              component: function () {
                return n.e(2117).then(n.bind(n, 42117));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "成效中心", route: "" },
                  { name: "隐患管理", route: "/effectivenessCenter/danger" },
                  { name: "隐患详情", route: "" },
                ],
              },
            },
            {
              path: "risk",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(4330),
                ]).then(n.bind(n, 44330));
              },
              meta: { auth: !0, breadcrumb: [] },
            },
            {
              path: "dailyControl",
              component: function () {
                return Promise.all([
                  n.e(8927),
                  n.e(7932),
                  n.e(925),
                  n.e(8696),
                  n.e(5698),
                  n.e(5509),
                  n.e(7545),
                  n.e(4120),
                ]).then(n.bind(n, 64120));
              },
              meta: { auth: !0, breadcrumb: [] },
            },
            {
              path: "lesson",
              component: function () {
                return n.e(3611).then(n.bind(n, 53611));
              },
              meta: { auth: !0, breadcrumb: [] },
            },
            {
              path: "emergency",
              component: function () {
                return n.e(4538).then(n.bind(n, 94538));
              },
              meta: { auth: !0, breadcrumb: [] },
            },
            {
              path: "emergencyReserveDetail",
              component: function () {
                return n.e(6421).then(n.bind(n, 56421));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "成效中心", route: "" },
                  { name: "应急服务", route: "/effectivenessCenter/emergency" },
                  { name: "应急演练服务", route: "" },
                ],
              },
            },
            {
              path: "emergencyDetail",
              component: function () {
                return n.e(9435).then(n.bind(n, 9435));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "成效中心", route: "" },
                  { name: "应急服务", route: "/effectivenessCenter/emergency" },
                  { name: "预案编制服务", route: "" },
                ],
              },
            },
            {
              path: "standard",
              component: function () {
                return n.e(8463).then(n.bind(n, 88463));
              },
              meta: { auth: !0, breadcrumb: [] },
            },
            {
              path: "standardDetail",
              component: function () {
                return n.e(196).then(n.bind(n, 30196));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "成效中心", route: "" },
                  {
                    name: "标准化服务",
                    route: "/effectivenessCenter/standard",
                  },
                  { name: "标准化服务信息", route: "" },
                ],
              },
            },
            {
              path: "other",
              component: function () {
                return n.e(6938).then(n.bind(n, 99414));
              },
              meta: { auth: !0, breadcrumb: [] },
            },
            {
              path: "otherDetail",
              component: function () {
                return n.e(1580).then(n.bind(n, 11580));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "成效中心", route: "" },
                  { name: "其他服务", route: "/effectivenessCenter/other" },
                  { name: "其他服务信息", route: "" },
                ],
              },
            },
          ],
        },
        {
          name: "后台管理",
          path: "/backstageManagement",
          component: o,
          meta: { auth: !0 },
          children: [
            {
              path: "companyManagement",
              component: function () {
                return n.e(5184).then(n.bind(n, 65184));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  { name: "公司管理", route: "" },
                ],
              },
            },
            {
              path: "companyManagementAdd",
              component: function () {
                return n.e(5640).then(n.bind(n, 35640));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "公司管理",
                    route: "/backstageManagement/companyManagement",
                  },
                  { name: "公司", route: "" },
                ],
              },
            },
            {
              path: "companyManagementView",
              component: function () {
                return n.e(7789).then(n.bind(n, 17789));
              },
              meta: { auth: !0 },
            },
            {
              path: "insuranceCompanyManagementAdd",
              component: function () {
                return n.e(728).then(n.bind(n, 728));
              },
              meta: { auth: !0 },
            },
            {
              path: "organizationManagementAdd",
              component: function () {
                return n.e(5217).then(n.bind(n, 75217));
              },
              meta: { auth: !0 },
            },
            {
              path: "organizationManagementView",
              component: function () {
                return n.e(4206).then(n.bind(n, 54206));
              },
              meta: { auth: !0 },
            },
            {
              path: "organizationManagementAdd",
              component: function () {
                return n.e(5217).then(n.bind(n, 75217));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "公司管理",
                    route: "/backstageManagement/companyManagement",
                  },
                  { name: "服务机构", route: "" },
                ],
              },
            },
            {
              path: "organizationManagementView",
              component: function () {
                return n.e(4206).then(n.bind(n, 54206));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  { name: "公司管理", route: "" },
                ],
              },
            },
            {
              path: "catalogManagement",
              component: function () {
                return n.e(2619).then(n.bind(n, 72619));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  { name: "数据字典", route: "" },
                ],
              },
            },
            {
              path: "catalogAdd",
              component: function () {
                return n.e(94).then(n.bind(n, 60094));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "数据字典",
                    route: "/backstageManagement/catalogManagement",
                  },
                  { name: "数据字典", route: "" },
                ],
              },
            },
            {
              path: "catalogItemAdd",
              component: function () {
                return n.e(9514).then(n.bind(n, 79514));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "数据字典",
                    route: "/backstageManagement/catalogManagement",
                  },
                  { name: "数据字典", route: "" },
                ],
              },
            },
            {
              path: "catalogItemCustom",
              component: function () {
                return n.e(8161).then(n.bind(n, 68161));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "数据字典",
                    route: "/backstageManagement/catalogManagement",
                  },
                  { name: "数据字典", route: "" },
                ],
              },
            },
            {
              path: "catalogItemCustomAdd",
              component: function () {
                return n.e(3705).then(n.bind(n, 53705));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "数据字典",
                    route: "/backstageManagement/catalogManagement",
                  },
                  { name: "数据字典", route: "" },
                ],
              },
            },
            {
              path: "insurancePolicy",
              component: function () {
                return n.e(8699).then(n.bind(n, 38699));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  { name: "保单管理", route: "" },
                ],
              },
            },
            {
              path: "insurancePolicyImport",
              component: function () {
                return n.e(1692).then(n.bind(n, 61692));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "保单管理",
                    route: "/backstageManagement/insurancePolicy",
                  },
                  { name: "保单导入", route: "" },
                ],
              },
            },
            {
              path: "insurancePolicyAdd",
              component: function () {
                return n.e(3683).then(n.bind(n, 13683));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "保单管理",
                    route: "/backstageManagement/insurancePolicy",
                  },
                  { name: "保单管理", route: "" },
                ],
              },
            },
            {
              path: "servicePackageAdd",
              component: function () {
                return n.e(8631).then(n.bind(n, 58631));
              },
              meta: { auth: !0 },
            },
            {
              path: "insurancePolicyConfig",
              component: function () {
                return n.e(5825).then(n.bind(n, 45825));
              },
              meta: { auth: !0 },
            },
            {
              path: "insurancePolicyLog",
              component: function () {
                return n.e(2495).then(n.bind(n, 32495));
              },
              meta: { auth: !0 },
            },
            {
              path: "insurancePolicyService",
              component: function () {
                return n.e(1672).then(n.bind(n, 21672));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/InsuranceServicePackageAdd",
              component: function () {
                return n.e(8856).then(n.bind(n, 8856));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/CompanyRiskConfigAdd",
              component: function () {
                return n.e(9811).then(n.bind(n, 49811));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/InsuranceServiceItemAdd",
              component: function () {
                return n.e(5787).then(n.bind(n, 85787));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/InsuranceOrganRatioAdd",
              component: function () {
                return n.e(2794).then(n.bind(n, 52794));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/InsurancePolicyAssignHistoryAdd",
              component: function () {
                return n.e(452).then(n.bind(n, 70452));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/BalanceServiceItemRatioAdd",
              component: function () {
                return n.e(87).then(n.bind(n, 80087));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/InsuranceServiceContentAdd",
              component: function () {
                return n.e(9653).then(n.bind(n, 39653));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/InsuranceReturnPartAdd",
              component: function () {
                return n.e(7128).then(n.bind(n, 87128));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/InsuranceReturnPartAdd",
              component: function () {
                return n.e(7128).then(n.bind(n, 87128));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/EmergencyServiceAdd",
              component: function () {
                return n.e(4621).then(n.bind(n, 84621));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/HiddenDangerManagementAdd",
              component: function () {
                return n.e(5734).then(n.bind(n, 45734));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/RiskManagementAdd",
              component: function () {
                return n.e(9939).then(n.bind(n, 69939));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/StandardizationServiceAdd",
              component: function () {
                return n.e(154).then(n.bind(n, 50154));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/TeachManagementAdd",
              component: function () {
                return n.e(8270).then(n.bind(n, 88270));
              },
              meta: { auth: !0 },
            },
            {
              path: "View/OtherServiceAdd",
              component: function () {
                return n.e(7155).then(n.bind(n, 47155));
              },
              meta: { auth: !0 },
            },
            {
              path: "userManagement",
              component: function () {
                return n.e(1657).then(n.bind(n, 11657));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  { name: "用户管理", route: "" },
                ],
              },
            },
            {
              path: "userManagementImport",
              component: function () {
                return n.e(1297).then(n.bind(n, 91297));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "用户管理",
                    route: "/backstageManagement/userManagement",
                  },
                  { name: "用户管理", route: "" },
                ],
              },
            },
            {
              path: "userManagementAdd",
              component: function () {
                return n.e(3573).then(n.bind(n, 63573));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "用户管理",
                    route: "/backstageManagement/userManagement",
                  },
                  { name: "用户管理", route: "" },
                ],
              },
            },
            {
              path: "userManagementDetail",
              component: function () {
                return n.e(3573).then(n.bind(n, 63573));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "用户管理",
                    route: "/backstageManagement/userManagement",
                  },
                  { name: "用户管理", route: "" },
                ],
              },
            },
            {
              path: "userOrganDetail",
              component: function () {
                return n.e(8087).then(n.bind(n, 48087));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "用户管理",
                    route: "/backstageManagement/userManagement",
                  },
                  { name: "用户管理", route: "" },
                ],
              },
            },
            {
              path: "permissionsManagement",
              component: function () {
                return n.e(7108).then(n.bind(n, 27108));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  { name: "权限管理", route: "" },
                ],
              },
            },
            {
              path: "permissionsManagementAdd",
              component: function () {
                return n.e(7988).then(n.bind(n, 47988));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "权限管理",
                    route: "/backstageManagement/permissionsManagement",
                  },
                  { name: "权限管理", route: "" },
                ],
              },
            },
            {
              path: "permissionsManagementDetail",
              component: function () {
                return n.e(7988).then(n.bind(n, 47988));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "权限管理",
                    route: "/backstageManagement/permissionsManagement",
                  },
                  { name: "权限管理", route: "" },
                ],
              },
            },
            {
              path: "itemEvaluationQuestionList",
              component: function () {
                return n.e(5011).then(n.bind(n, 25011));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  { name: "项目考评题目管理", route: "" },
                ],
              },
            },
            {
              path: "itemEvaluationQuestionAdd",
              component: function () {
                return n.e(6075).then(n.bind(n, 46075));
              },
              meta: {
                auth: !0,
                breadcrumb: [
                  { name: "后台管理", route: "" },
                  {
                    name: "项目考评题目管理",
                    route: "/backstageManagement/itemEvaluationQuestionList",
                  },
                  { name: "项目考评题目管理", route: "" },
                ],
              },
            },
            {
              path: "globalUserGroupTypeAdd",
              component: function () {
                return n.e(90).then(n.bind(n, 50090));
              },
              meta: { auth: !0 },
            },
            {
              path: "roleUser",
              component: function () {
                return n.e(8750).then(n.bind(n, 88750));
              },
              meta: { auth: !0 },
            },
            {
              path: "roleUserAdd",
              component: function () {
                return n.e(1877).then(n.bind(n, 51877));
              },
              meta: { auth: !0 },
            },
            {
              path: "roleUserAdd1",
              component: function () {
                return n.e(202).then(n.bind(n, 80202));
              },
              meta: { auth: !0 },
            },
            {
              path: "controllerGroupAdd",
              component: function () {
                return n.e(6621).then(n.bind(n, 36621));
              },
              meta: { auth: !0 },
            },
            {
              path: "globalControllerGroupItemAdd",
              component: function () {
                return n.e(4930).then(n.bind(n, 34930));
              },
              meta: { auth: !0 },
            },
            {
              path: "controllerGroupDetail",
              component: function () {
                return n.e(6621).then(n.bind(n, 36621));
              },
              meta: { auth: !0 },
            },
            {
              path: "TestCalendar",
              component: function () {
                return n.e(8471).then(n.bind(n, 59653));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalLog",
              component: function () {
                return n.e(6723).then(n.bind(n, 16723));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalLogList",
              component: function () {
                return n.e(551).then(n.bind(n, 551));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalLogListView",
              component: function () {
                return n.e(949).then(n.bind(n, 949));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalLogUseList",
              component: function () {
                return n.e(3433).then(n.bind(n, 33433));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalLogUseListView",
              component: function () {
                return n.e(2741).then(n.bind(n, 42741));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalLogTempView",
              component: function () {
                return n.e(4640).then(n.bind(n, 4640));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalLogView",
              component: function () {
                return n.e(6794).then(n.bind(n, 56794));
              },
              meta: { auth: !0 },
            },
            {
              path: "AdminGlobalDeleteLogView",
              component: function () {
                return n.e(2409).then(n.bind(n, 22409));
              },
              meta: { auth: !0 },
            },
            {
              path: "SysBackup",
              component: function () {
                return n.e(1007).then(n.bind(n, 91007));
              },
              meta: { auth: !0 },
            },
            {
              path: "SysExcelExport",
              component: function () {
                return n.e(4207).then(n.bind(n, 24207));
              },
              meta: { auth: !0 },
            },
            {
              path: "EmergencyBureauOnceImport",
              component: function () {
                return n.e(9711).then(n.bind(n, 19711));
              },
              meta: { auth: !0 },
            },
          ],
        },
      ])),
        (v = E(u)),
        (v = E(m)),
        (v = E(h)),
        (v = E(p)),
        (v = E(l)),
        (v = E(f)),
        (v = E(g));
      var y = (v = E(b)),
        C = n(91790),
        A = n(1249),
        S = n(63046),
        I = n(58796),
        R = n(19755);
      a.default.use(r.ZP);
      var D = new r.ZP({ routes: y });
      window.router = D;
      var N = function () {
        var e = (0, I.LP)();
        return e && "" !== e && "undefined" !== e;
      };
      D.beforeEach(function (e, t, n) {
        "/" === t.path &&
          A.Z.dispatch("user/userDataLoad", $Storage.getUserData());
        var a = C.Z.filter(function (t) {
          return t.route == e.path;
        });
        a.length > 0 && A.Z.dispatch("menu/changeMenu", Number(a[0].parentId)),
          S.ZP.storeSet("breadcrumb", e.meta.breadcrumb || [], !1),
          setTimeout(function () {
            R.zhoujl.resizeLayout();
          }, 100),
          e.meta.auth
            ? N() || "/login" === e.path
              ? n()
              : n({ path: "/login", query: { redirect: e.fullPath } })
            : n();
      });
      var O = r.ZP.prototype.push;
      r.ZP.prototype.push = function (e) {
        return O.call(this, e).catch(function () {});
      };
      var T = r.ZP.prototype.go;
      r.ZP.prototype.go = function (e) {
        return 1 === window.history.length
          ? ((window.opener = null),
            void window.open("about:blank", "_top").close())
          : T.call(this, e);
      };
      var _ = function () {
        return new r.ZP({
          scrollBehavior: function () {
            return { y: 0 };
          },
          routes: y,
        });
      };
      function k() {
        var e = _();
        D.matcher = e.matcher;
      }
      var w = D;
    },
    63250: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
        u: function () {
          return i;
        },
      });
      var a = n(15671),
        r = n(43144),
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, null, [
              {
                key: "submitVerify",
                value: function (e) {
                  var t = !0;
                  return (
                    e.$EventBus.$emit("input-verify", function (e) {
                      e || (t = e);
                    }),
                    t
                  );
                },
              },
            ]),
            e
          );
        })();
      function i(e) {
        (null != e && void 0 !== e) || (e = ""),
          "string" != typeof e && (e = JSON.stringify(e));
        var t,
          n,
          a = 0;
        if (0 === e.length) return a;
        for (t = 0, n = e.length; t < n; t++)
          (a = (a << 5) - a + e.charCodeAt(t)), (a |= 0);
        return a;
      }
    },
    31336: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(15671),
        r = n(43144),
        o = (n(41539), n(88674), n(68309), n(65754)),
        i = n.n(o),
        u = n(11802),
        c = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, null, [
              {
                key: "downloadFile",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    a =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  return (
                    console.log(t),
                    null == t || "" == t
                      ? ($message.error("该附件错误"),
                        new Promise(function (e, t) {
                          t(new Error("该附件错误"));
                        }))
                      : new Promise(
                          "0" == t
                            ? function (e, t) {
                                $message.error(
                                  "该附件正在生成中，请稍后刷新重试"
                                ),
                                  t(
                                    new Error(
                                      "该附件正在生成中，请稍后刷新重试"
                                    )
                                  );
                              }
                            : function (r, o) {
                                (0, u.dJ)(e, { fileId: t }, "GET").then(
                                  function (e) {
                                    new (i())({
                                      getAuthorization: function (t, n) {
                                        n({
                                          TmpSecretId: e.data.data.secretId,
                                          TmpSecretKey: e.data.data.secretKey,
                                          SecurityToken:
                                            e.data.data.accessToken,
                                          StartTime: Math.ceil(
                                            new Date().getTime() / 1e3
                                          ),
                                          ExpiredTime:
                                            Math.ceil(
                                              new Date().getTime() / 1e3
                                            ) + 1800,
                                          ScopeLimit: !0,
                                        });
                                      },
                                    }).getObjectUrl(
                                      {
                                        Bucket: e.data.data.bucket,
                                        Region: e.data.data.region,
                                        Key: t,
                                        Sign: !0,
                                      },
                                      function (e, t) {
                                        if (null != n) {
                                          var i =
                                            t.Url +
                                            (t.Url.indexOf("?") > -1
                                              ? "&"
                                              : "?") +
                                            "response-content-disposition=attachment;filename=" +
                                            n +
                                            ";filename*=utf-8''" +
                                            encodeURI(n);
                                          a ? r(i) : window.open(i);
                                        }
                                        e && o(e), t && r(t.Url);
                                      }
                                    );
                                  }
                                );
                              }
                        )
                  );
                },
              },
              {
                key: "uploadFile",
                value: function (e, t, n, a) {
                  return new Promise(function (r, o) {
                    (0, u.dJ)(e, { table: t }, "GET").then(function (e) {
                      new (i())({
                        getAuthorization: function (t, n) {
                          n({
                            TmpSecretId: e.data.data.secretId,
                            TmpSecretKey: e.data.data.secretKey,
                            SecurityToken: e.data.data.accessToken,
                            StartTime: Math.ceil(new Date().getTime() / 1e3),
                            ExpiredTime:
                              Math.ceil(new Date().getTime() / 1e3) + 1800,
                            ScopeLimit: !0,
                          });
                        },
                      }).putObject(
                        {
                          Bucket: e.data.data.bucket,
                          Region: e.data.data.region,
                          Key: e.data.data.fileId,
                          StorageClass: "STANDARD",
                          Body: n,
                          onProgress: function (e) {
                            null != a && a(e);
                          },
                        },
                        function (t, a) {
                          t
                            ? o(t)
                            : a && 200 == a.statusCode
                            ? r({
                                fileId: e.data.data.fileId,
                                fileType: n.type,
                                fileName: n.name,
                                fileSize: n.size,
                              })
                            : o(a);
                        }
                      );
                    });
                  });
                },
              },
            ]),
            e
          );
        })();
    },
    54867: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(15671),
        r = n(43144),
        o = (n(39357), n(15094)),
        i = n(19755),
        u = (0, o.P)(function (e) {
          $message.error(e);
        }, 20),
        c = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, null, [
              {
                key: "alert",
                value: function (e, t, n) {
                  u(t);
                },
              },
              {
                key: "confirm",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "确认框",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "是否确认",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : "blue",
                    r =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : "确认",
                    o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : "取消";
                  i.confirm({
                    animation: "top",
                    closeAnimation: "scale",
                    title: e,
                    content: t,
                    type: a,
                    buttons: {
                      ok: {
                        text: r,
                        btnClass: "btn-" + a,
                        action: function () {
                          if (n) {
                            n(!0);
                          }
                        },
                      },
                      cancel: {
                        text: o,
                        action: function () {
                          if (n) {
                            n(!1);
                          }
                        },
                      },
                    },
                  });
                },
              },
              {
                key: "inputConfirm",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "输入框",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "请输入",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : "blue",
                    r =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : "确认",
                    o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : "取消";
                  i.confirm({
                    animation: "top",
                    keyboardEnabled: !0,
                    type: a,
                    title: e,
                    content:
                      '<input class="form-control" id="inputConfirm" type="text" placeholder="' +
                      t +
                      '"/>',
                    buttons: {
                      ok: {
                        text: r,
                        btnClass: "btn-primary",
                        action: function () {
                          n && n(!0, i("#inputConfirm").val());
                        },
                      },
                      cancel: {
                        text: o,
                        action: function () {
                          n && n(!1, i("#inputConfirm").val());
                        },
                      },
                    },
                  });
                },
              },
            ]),
            e
          );
        })();
    },
    13400: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = n(15671),
        r = n(43144),
        o =
          (n(41539),
          n(39714),
          n(24603),
          n(74916),
          n(15306),
          n(56977),
          n(4723),
          n(30381)),
        i = n.n(o),
        u = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, null, [
              {
                key: "utcString2Date",
                value: function (t) {
                  var n = i()(t).toString();
                  return e.string2Date(n);
                },
              },
              {
                key: "string2Date",
                value: function (e) {
                  if (e) {
                    var t = new RegExp("\\-", "gi"),
                      n = e.replace(t, "/"),
                      a = Date.parse(n);
                    return new Date(a);
                  }
                },
              },
              {
                key: "getDateDiff",
                value: function (e, t) {
                  var n = e.getTime(),
                    a = t.getTime();
                  return (Math.abs(n - a) / 864e5).toFixed(1);
                },
              },
              {
                key: "getDateDiffFixed0",
                value: function (e, t) {
                  var n = e.getTime(),
                    a = t.getTime();
                  return (Math.abs(n - a) / 864e5).toFixed(0);
                },
              },
              {
                key: "string2FormatString",
                value: function (t, n) {
                  var a = e.string2Date(t);
                  return e.formatDate(a.getTime(), n);
                },
              },
              {
                key: "getNowDate",
                value: function () {
                  var e = new Date(),
                    t = e.getFullYear(),
                    n = e.getMonth() + 1,
                    a = e.getDate(),
                    r = e.getDay(),
                    o = e.getHours(),
                    i = e.getMinutes(),
                    u = e.getSeconds();
                  switch (r) {
                    case 1:
                      r = "星期一";
                      break;
                    case 2:
                      r = "星期二";
                      break;
                    case 3:
                      r = "星期三";
                      break;
                    case 4:
                      r = "星期四";
                      break;
                    case 5:
                      r = "星期五";
                      break;
                    case 6:
                      r = "星期六";
                      break;
                    case 0:
                      r = "星期日";
                      break;
                    default:
                      r = "系统时间错误！";
                  }
                  return (
                    t +
                    "年" +
                    this.pad(n, 2) +
                    "月" +
                    this.pad(a, 2) +
                    "日  " +
                    r +
                    "  " +
                    this.pad(o, 2) +
                    ":" +
                    this.pad(i, 2) +
                    ":" +
                    this.pad(u, 2)
                  );
                },
              },
              {
                key: "pad",
                value: function (e, t) {
                  for (var n = e, a = e.toString().length; a < t; )
                    (n = "0" + e), a++;
                  return n;
                },
              },
              {
                key: "formatDate",
                value: function (e, t) {
                  if (e && 0 == e) return "-";
                  var n = t,
                    a = new Date();
                  a.setTime(parseInt(e, 10));
                  var r,
                    o = {
                      trident:
                        (r = navigator.userAgent).indexOf("Trident") > -1,
                      presto: r.indexOf("Presto") > -1,
                      webKit: r.indexOf("AppleWebKit") > -1,
                      gecko:
                        r.indexOf("Gecko") > -1 && -1 === r.indexOf("KHTML"),
                      mobile:
                        !!r.match(/AppleWebKit.*Mobile.*/) ||
                        (!!r.match(/AppleWebKit/) &&
                          r.indexOf("QIHU") &&
                          r.indexOf("QIHU") > -1 &&
                          r.indexOf("Chrome") < 0),
                      ios: !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                      android:
                        r.indexOf("Android") > -1 || r.indexOf("Linux") > -1,
                      iPhone: r.indexOf("iPhone") > -1 || r.indexOf("Mac") > -1,
                      iPad: r.indexOf("iPad") > -1,
                      webApp: -1 === r.indexOf("Safari"),
                    };
                  (n = null !== n ? n : "yyyy-MM-dd hh:mm"),
                    (o.ios || o.iPhone || o.iPad) &&
                      (n = n.replace("yyyy-MM-dd", "yyyy/MM/dd"));
                  var i = {
                    "M+": a.getMonth() + 1,
                    "d+": a.getDate(),
                    "h+": a.getHours(),
                    "m+": a.getMinutes(),
                    "s+": a.getSeconds(),
                    "q+": Math.floor((a.getMonth() + 3) / 3),
                    S: a.getMilliseconds(),
                  };
                  for (var u in (/(y+)/.test(n) &&
                    (n = n.replace(
                      RegExp.$1,
                      a
                        .getFullYear()
                        .toString()
                        .substr(4 - RegExp.$1.length)
                    )),
                  i))
                    new RegExp("(" + u + ")").test(n) &&
                      (n = n.replace(
                        RegExp.$1,
                        1 === RegExp.$1.length
                          ? i[u]
                          : ("00" + i[u]).substr(i[u].toString().length)
                      ));
                  return n;
                },
              },
              {
                key: "getBeforeDayDate",
                value: function (e) {
                  var t = new Date().getTime();
                  return new Date(t - 24 * e * 3600 * 1e3);
                },
              },
              {
                key: "getBeforeDayDateStr",
                value: function (e) {
                  var t = new Date().getTime();
                  return this.formatDate(
                    new Date(t - 24 * e * 3600 * 1e3).getTime(),
                    "yyyy-MM-dd hh:mm:ss"
                  );
                },
              },
              {
                key: "getAfterDayDate",
                value: function (e) {
                  var t = new Date().getTime();
                  return new Date(t + 24 * e * 3600 * 1e3);
                },
              },
              {
                key: "getAfterDayDateStr",
                value: function (e) {
                  var t = new Date().getTime();
                  return this.formatDate(
                    new Date(t + 24 * e * 3600 * 1e3).getTime(),
                    "yyyy-MM-dd hh:mm:ss"
                  );
                },
              },
              {
                key: "getCurrentMonthFirst",
                value: function () {
                  var e = new Date();
                  return e.setDate(1), e;
                },
              },
              {
                key: "getCurrentMonthLast",
                value: function () {
                  var e = new Date(),
                    t = e.getMonth(),
                    n = ++t,
                    a = new Date(e.getFullYear(), n, 1);
                  return new Date(a - 864e5);
                },
              },
              {
                key: "getCurrentMonthStartAndEndTime",
                value: function () {
                  var t = e.getCurrentMonthFirst(),
                    n = e.getCurrentMonthLast();
                  return [
                    t.getFullYear() +
                      "-" +
                      (t.getMonth() + 1) +
                      "-" +
                      t.getDate(),
                    n.getFullYear() +
                      "-" +
                      (n.getMonth() + 1) +
                      "-" +
                      n.getDate(),
                  ];
                },
              },
              {
                key: "getBeforeDayStartAndEndTime",
                value: function (t) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "yyyy-MM-dd",
                    a = new Date(),
                    r = e.getBeforeDayDate(t);
                  return [
                    e.formatDate(r.getTime(), n),
                    e.formatDate(a.getTime(), n),
                  ];
                },
              },
              {
                key: "getHourTimeMinTime",
                value: function (e) {
                  var t = Math.floor(e / 60),
                    n = "";
                  t >= 0 && t < 10
                    ? (n = "0" + t)
                    : t >= 10 && t < 24
                    ? (n = t.toString())
                    : t >= 24 && (n = "0" + (t - 24));
                  var a = Math.floor(e % 60);
                  return n + ":" + (a >= 0 && a < 10 ? "0" + a : a.toString());
                },
              },
              {
                key: "format",
                value: function (e, t, n) {
                  var a,
                    r = {
                      trident:
                        (a = navigator.userAgent).indexOf("Trident") > -1,
                      presto: a.indexOf("Presto") > -1,
                      webKit: a.indexOf("AppleWebKit") > -1,
                      gecko:
                        a.indexOf("Gecko") > -1 && -1 === a.indexOf("KHTML"),
                      mobile:
                        !!a.match(/AppleWebKit.*Mobile.*/) ||
                        (!!a.match(/AppleWebKit/) &&
                          a.indexOf("QIHU") &&
                          a.indexOf("QIHU") > -1 &&
                          a.indexOf("Chrome") < 0),
                      ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                      android:
                        a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
                      iPhone: a.indexOf("iPhone") > -1 || a.indexOf("Mac") > -1,
                      iPad: a.indexOf("iPad") > -1,
                      webApp: -1 === a.indexOf("Safari"),
                    },
                    o = null != t ? t : "yyyy-MM-dd hh:mm";
                  (r.ios || r.iPhone || r.iPad) &&
                    (n || (o = o.replace("yyyy-MM-dd", "yyyy/MM/dd")));
                  var i = {
                    "M+": e.getMonth() + 1,
                    "d+": e.getDate(),
                    "h+": e.getHours(),
                    "m+": e.getMinutes(),
                    "s+": e.getSeconds(),
                    "q+": Math.floor((e.getMonth() + 3) / 3),
                    S: e.getMilliseconds(),
                  };
                  for (var u in (/(y+)/.test(o) &&
                    (o = o.replace(
                      RegExp.$1,
                      String(e.getFullYear()).substr(4 - RegExp.$1.length)
                    )),
                  i))
                    new RegExp("(" + u + ")").test(o) &&
                      (o = o.replace(
                        RegExp.$1,
                        1 === RegExp.$1.length
                          ? i[u]
                          : ("00" + i[u]).substr(String(i[u]).length)
                      ));
                  return o;
                },
              },
              {
                key: "formatStr",
                value: function (e, t) {
                  var n = null != t ? t : "yyyy-MM-dd hh:mm";
                  if (!e) return "";
                  var a = new Date(e),
                    r = {
                      "M+": a.getMonth() + 1,
                      "d+": a.getDate(),
                      "h+": a.getHours(),
                      "m+": a.getMinutes(),
                      "s+": a.getSeconds(),
                      "q+": Math.floor((a.getMonth() + 3) / 3),
                      S: a.getMilliseconds(),
                    };
                  for (var o in (/(y+)/.test(n) &&
                    (n = n.replace(
                      RegExp.$1,
                      String(a.getFullYear()).substr(4 - RegExp.$1.length)
                    )),
                  r))
                    new RegExp("(" + o + ")").test(n) &&
                      (n = n.replace(
                        RegExp.$1,
                        1 === RegExp.$1.length
                          ? r[o]
                          : ("00" + r[o]).substr(String(r[o]).length)
                      ));
                  return n;
                },
              },
            ]),
            e
          );
        })();
    },
    48592: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = n(15671),
        r = n(43144),
        o = n(4942),
        i =
          (n(41539),
          n(54747),
          n(21249),
          n(39714),
          n(57327),
          n(9653),
          n(69600),
          n(68309),
          n(56977),
          n(47941),
          n(74916),
          n(15306),
          n(82492)),
        u = n.n(i),
        c = n(34661),
        m = n(99168),
        h = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, null, [
              {
                key: "join",
                value: function () {
                  for (var e = {}, t = 0, n = arguments.length; t < n; t++) {
                    var a = arguments[t];
                    for (var r in a) e[r] = a[r];
                  }
                  return e;
                },
              },
              {
                key: "merge",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t.reduce(function (e, t) {
                    return u()(e, t);
                  });
                },
              },
              {
                key: "copy",
                value: function (e, t) {
                  for (var n in t) e[n] = t[n];
                  return e;
                },
              },
              {
                key: "arr2Json",
                value: function (e, t) {
                  var n = t;
                  n || (n = "id");
                  for (var a = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    a[i[n]] = i;
                  }
                  return a;
                },
              },
              {
                key: "arrCut",
                value: function (e, t) {
                  var n = {};
                  if (!t) return n;
                  for (var a = 0, r = e.length; a < r; a++) {
                    var o = e[a];
                    n[o[t]] ? n[o[t]].push(o) : (n[o[t]] = [o]);
                  }
                  return n;
                },
              },
              {
                key: "json2Arr",
                value: function (e) {
                  var t = [];
                  for (var n in e) t.push(e[n]);
                  return t;
                },
              },
              {
                key: "getJsonTable",
                value: function (t) {
                  if (e.jsonDataTableList[t]) return e.jsonDataTableList[t];
                  var n = e.jsonDataTable[t];
                  return (
                    n || console.error("Error Table", t),
                    (n.columns = {}),
                    n.columnList.forEach(function (e) {
                      n.columns[e.columnName] = e;
                    }),
                    (e.jsonDataTableList[t] = n),
                    n
                  );
                },
              },
              {
                key: "getJsonRemark",
                value: function (e) {
                  return this.getJsonTable(e).remark;
                },
              },
              {
                key: "getJsonColumn",
                value: function (t, n) {
                  var a = e.getJsonTable(t).columns[n];
                  return (
                    null == a && console.log(t + " column is null:" + n), a
                  );
                },
              },
              {
                key: "getJsonCellStyle",
                value: function (e, t, n) {
                  if (e && t && n) {
                    var a = this.get(e, t);
                    if (a) {
                      var r,
                        o = this.getJsonTable(n).columns[t],
                        i =
                          null == o || null === (r = o.data) || void 0 === r
                            ? void 0
                            : r.split(",");
                      if (i && "enums" === i[0]) {
                        var u = this.getEnumsJson(i[1], i[2]),
                          c = this.get(u, a, "style");
                        if (c) return c;
                      }
                    }
                  }
                },
              },
              {
                key: "getJsonOption",
                value: function (e, t, n, a) {
                  var r = [];
                  $Web.getOptions(
                    r,
                    $Json.getJsonColumn(e, t).data,
                    a,
                    function () {
                      n(r);
                    }
                  );
                },
              },
              {
                key: "getJsonCellValOption",
                value: function (e, t, n) {
                  if (!e) return "";
                  var a = e[n];
                  return t && null != a && void 0 !== a
                    ? a
                        .toString()
                        .split(",")
                        .map(function (e) {
                          var n = t.filter(function (t) {
                            return Number(t.key) == Number(e);
                          });
                          return n.length > 0 ? n[0].value : "";
                        })
                        .join(",")
                    : "";
                },
              },
              {
                key: "getJsonCellVal",
                value: function (t, n, a) {
                  var r = a;
                  if (!t) return "";
                  if ((r || (r = t._tableName), null === n || "" === n))
                    return "";
                  if (
                    "insuranceServiceItem" === a &&
                    0 === Number(t[n]) &&
                    !t.isRequired &&
                    ("state" === n || "stage" === n)
                  )
                    return "待激活";
                  if (
                    ("string" == typeof r && (r = e.getJsonTable(r).columns),
                    "_oprate" === n || "_afterAll" === n || "_operate" === n)
                  )
                    return "";
                  if (!r) return "";
                  var o = r[n],
                    i = null,
                    u = null;
                  if (!o)
                    return console.log("Error PageDataTable Cell", t, n), "";
                  if ((o.data && (i = o.data.split(",")), i && i.length > 1)) {
                    for (var c = 0; c < i.length; c++) {
                      var m = i[c];
                      if ("json" === m) {
                        var h = $Json.getJsonColumn(i[1], i[2]);
                        m = (i = h.data.split(","))[c];
                      }
                      if ("table" === m) {
                        var s = i[2].split("|"),
                          p = i[1],
                          d =
                            p +
                            s[1].substring(0, 1).toUpperCase() +
                            s[1].substring(1, s[1].length),
                          l = d + "s",
                          f = t[d];
                        if (t[l]) {
                          var g = t[l];
                          g[t[n]] && (f = g[t[n]]);
                        }
                        if (f) {
                          if (f instanceof Array)
                            return f
                              .filter(function (e) {
                                return null !== e;
                              })
                              .map(function (e) {
                                var t = e.name.split("-");
                                return t[t.length - 1];
                              })
                              .join(",");
                          if (f[s[0]] == t[n]) return f[s[1]];
                        }
                        return t[(d = p + "_Text")] && "请选择" !== t[d]
                          ? t[d]
                          : "";
                      }
                      if ("year" === m) return t[n];
                      if ("enums" === m) {
                        var b,
                          v = this.getEnumsJson(i[1], i[2]);
                        return null == v ||
                          null === (b = v[t[n]]) ||
                          void 0 === b
                          ? void 0
                          : b[i[3]];
                      }
                    }
                    return null === t[n] || void 0 === t[n]
                      ? (console.log("Error cell: " + n), "")
                      : t[n]
                          .toString()
                          .split(",")
                          .map(function (e) {
                            for (var t = 0, n = i.length; t < n; t++) {
                              var a = i[t].split("|");
                              if (a[0] === e) return a[1];
                            }
                            return i[0][1];
                          })
                          .join(",");
                  }
                  if (
                    (o.bind || o.baseBind) &&
                    2 ===
                      (u = o.bind ? o.bind.split(",") : o.baseBind.split(","))
                        .length
                  ) {
                    var E = u[0],
                      y = u[1],
                      C = r[E].data.split(",");
                    if (C[1]) {
                      var A = e.getJsonTable(C[1]).columns;
                      if (A[y].data && -1 === A[y].data.indexOf("table,")) {
                        var S,
                          I = A[y].data.split(",").map(function (e) {
                            var t = e.split("|");
                            return { id: t[0], value: t[1] };
                          });
                        return null === (S = this.arr2Json(I, "id")[t[n]]) ||
                          void 0 === S
                          ? void 0
                          : S.value;
                      }
                    }
                  }
                  if (null !== t[n]) {
                    var R = r[n];
                    if ("d" === R.entityType || "Date" === R.entityType) {
                      if (!t[n]) return "";
                      var D = t[n].split(".")[0],
                        N = D.split("T");
                      return (
                        N.length > 1 && "00:00:00" === N[1] && (N[1] = ""),
                        (D = N.join(" "))
                      );
                    }
                    return ("float" !== R.entityType &&
                      "double" !== R.entityType) ||
                      !t[n].toFixed
                      ? t[n]
                      : t[n].toFixed(2);
                  }
                  return o.defaultVal ? o.defaultVal : "";
                },
              },
              {
                key: "parse",
                value: function (t) {
                  return t && "[object Object]" !== t
                    ? JSON.parse(e.format(t))
                    : {};
                },
              },
              {
                key: "format",
                value: function (e) {
                  return e
                    ? e
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&nbsp;/g, " ")
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&nbsp;/g, " ")
                        .replace(/onerror/gi, "")
                        .replace(/onload/gi, "")
                        .replace(/<script/gi, "&gt;script")
                    : "";
                },
              },
              {
                key: "get",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t.reduce(function (e, t) {
                    return null == e ? void 0 : e[t];
                  });
                },
              },
              {
                key: "getNumber",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t.reduce(function (e, t) {
                    return isNaN(null == e ? void 0 : e[t])
                      ? 0
                      : null == e
                      ? void 0
                      : e[t];
                  });
                },
              },
              {
                key: "stringify",
                value: function (e) {
                  return JSON.stringify(e)
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                },
              },
              {
                key: "getPlaceholder",
                value: function (e, t) {
                  var n, a;
                  return m.Z.getOptions(
                    [],
                    null === (n = $Json.getJsonTable(e)) ||
                      void 0 === n ||
                      null === (n = n.columns) ||
                      void 0 === n ||
                      null === (n = n[t]) ||
                      void 0 === n
                      ? void 0
                      : n.data,
                    {
                      filter:
                        null === (a = $Json.getJsonTable(e)) ||
                        void 0 === a ||
                        null === (a = a.columns) ||
                        void 0 === a ||
                        null === (a = a[t]) ||
                        void 0 === a
                          ? void 0
                          : a.filter,
                    }
                  );
                },
              },
              {
                key: "getEnumsJson",
                value: function (e, t) {
                  var n = this.getEnumsArray(e, t);
                  return this.arr2Json(n, t);
                },
              },
              {
                key: "getEnumsArray",
                value: function (e) {
                  var t = c.ZP[e];
                  return this.json2Arr(t);
                },
              },
              {
                key: "uuid",
                value: function () {
                  function e() {
                    return ((65536 * (1 + Math.random())) | 0)
                      .toString(16)
                      .substring(1);
                  }
                  return (
                    e() +
                    e() +
                    "-" +
                    e() +
                    "-" +
                    e() +
                    "-" +
                    e() +
                    "-" +
                    e() +
                    e() +
                    e()
                  );
                },
              },
              {
                key: "toChineseBig",
                value: function (e) {
                  for (
                    var t,
                      n = String(e),
                      a = [
                        "十",
                        "百",
                        "千",
                        "万",
                        "十",
                        "百",
                        "千",
                        "亿",
                        "十",
                        "百",
                        "千",
                      ],
                      r = ["@"],
                      o = 0,
                      i = n.length - 1;
                    r.unshift(
                      ((t = n[i]),
                      void 0,
                      "零一二三四五六七八九",
                      "零一二三四五六七八九"[t])
                    ),
                      !(i <= 0);
                    i--
                  )
                    r.unshift(a[o]), o++;
                  return r
                    .join("")
                    .replace(/(零[千百十]){1,3}/g, "零")
                    .replace(/零{2,}/g, "零")
                    .replace(/零([万亿])/g, "$1")
                    .replace(/亿万/g, "亿")
                    .replace(/零*@/g, "");
                },
              },
            ]),
            e
          );
        })();
      (0, o.Z)(h, "jsonDataTable", n(83311)),
        (0, o.Z)(h, "jsonDataTableList", {});
    },
    15094: function (e, t, n) {
      "use strict";
      function a(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 300;
        return function () {
          var a = this,
            r = arguments;
          clearTimeout(t),
            (t = setTimeout(function () {
              e.apply(a, r);
            }, n));
        };
      }
      function r(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 300,
          n = 0;
        return function () {
          var a = Date.now();
          a - n > t && (e.apply(this, arguments), (n = a));
        };
      }
      n.d(t, {
        D: function () {
          return a;
        },
        P: function () {
          return r;
        },
      });
    },
    46055: function (e, t, n) {
      "use strict";
      n.d(t, {
        IH: function () {
          return i;
        },
        lu: function () {
          return u;
        },
        oU: function () {
          return o;
        },
        pc: function () {
          return r;
        },
        s1: function () {
          return c;
        },
      });
      n(60086);
      var a = n(90482);
      function r(e, t) {
        return new a.t(e).mul(new a.t(t)).toNumber();
      }
      function o() {
        for (
          var e = 1, t = arguments.length, n = new Array(t), a = 0;
          a < t;
          a++
        )
          n[a] = arguments[a];
        for (var o = 0; o < n.length; o++) {
          if (!n[o]) return null;
          e = r(e, n[o]);
        }
        return e;
      }
      function i() {
        for (
          var e = 0, t = arguments.length, n = new Array(t), r = 0;
          r < t;
          r++
        )
          n[r] = arguments[r];
        for (var o = 0; o < n.length; o++)
          void 0 === n[o] && (n[o] = 0), (e = new a.t(e).add(new a.t(n[o])));
        return e.toNumber();
      }
      function u() {
        for (var e = 0, t = 0; t < arguments.length; t++)
          void 0 !== (t < 0 || arguments.length <= t ? void 0 : arguments[t]) &&
            (e =
              0 !== t
                ? new a.t(e).sub(
                    new a.t(
                      t < 0 || arguments.length <= t ? void 0 : arguments[t]
                    )
                  )
                : t < 0 || arguments.length <= t
                ? void 0
                : arguments[t]);
        return e.toNumber();
      }
      function c(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        return 0 == t ? 0 : new a.t(e).div(new a.t(t)).toNumber();
      }
    },
    96547: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(15671),
        r = n(43144),
        o =
          (n(47941),
          (function () {
            function e() {
              (0, a.Z)(this, e);
            }
            return (
              (0, r.Z)(e, null, [
                {
                  key: "paramsSet",
                  value: function (t, n) {
                    e.sessionStorageSet(t, JSON.stringify(n));
                  },
                },
                {
                  key: "paramsGet",
                  value: function (t) {
                    var n = e.sessionStorageGet(t);
                    return null !== n ? JSON.parse(n) : null;
                  },
                },
                {
                  key: "sessionStorageSet",
                  value: function (e, t) {
                    sessionStorage.setItem(e, t);
                  },
                },
                {
                  key: "sessionStorageGet",
                  value: function (e) {
                    return sessionStorage.getItem(e);
                  },
                },
                {
                  key: "localStorageSet",
                  value: function (e, t) {
                    localStorage.setItem(e, t);
                  },
                },
                {
                  key: "localStorageGet",
                  value: function (e) {
                    return localStorage.getItem(e);
                  },
                },
                {
                  key: "setToken",
                  value: function (e) {
                    this.localStorageSet("token", e);
                  },
                },
                {
                  key: "setUserData",
                  value: function (t) {
                    e.localStorageSet("userData", $Json.stringify(t));
                  },
                },
                {
                  key: "getUserData",
                  value: function () {
                    return $Json.parse(e.localStorageGet("userData"));
                  },
                },
              ]),
              e
            );
          })());
    },
    26944: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(15671),
        r = n(43144),
        o =
          (n(74916),
          (function () {
            function e() {
              (0, a.Z)(this, e);
            }
            return (
              (0, r.Z)(e, null, [
                {
                  key: "isNullOrEmpty",
                  value: function (e) {
                    return null === e || "" === e || "undefined" === e;
                  },
                },
                {
                  key: "isNumeric",
                  value: function (e) {
                    return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(e);
                  },
                },
                {
                  key: "isDecimal",
                  value: function (e) {
                    return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(e);
                  },
                },
                {
                  key: "isNegativeDecimal",
                  value: function (e) {
                    return /^-?(?:0|[1-9]\d*)\.\d+$/.test(e);
                  },
                },
                {
                  key: "isPositiveDecimal",
                  value: function (e) {
                    return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(e);
                  },
                },
                {
                  key: "isInteger",
                  value: function (e) {
                    return /^[-+]?(?:0|[1-9]\d*)$/.test(e);
                  },
                },
                {
                  key: "isPositiveInteger",
                  value: function (e) {
                    return /^\+?(?:0|[1-9]\d*)$/.test(e);
                  },
                },
                {
                  key: "isNegativeInteger",
                  value: function (e) {
                    return /^-?(?:0|[1-9]\d*)$/.test(e);
                  },
                },
                {
                  key: "isEmail",
                  value: function (e) {
                    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e);
                  },
                },
                {
                  key: "isIdCard",
                  value: function (e) {
                    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e);
                  },
                },
                {
                  key: "isPhone",
                  value: function (e) {
                    return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
                      e
                    );
                  },
                },
                {
                  key: "isIp",
                  value: function () {
                    return !1;
                  },
                },
              ]),
              e
            );
          })());
    },
    58796: function (e, t, n) {
      "use strict";
      n.d(t, {
        LP: function () {
          return h;
        },
        gy: function () {
          return p;
        },
        o4: function () {
          return s;
        },
      });
      var a = n(15671),
        r = n(43144),
        o = (n(68309), n(19601), n(41539), n(39714), n(47941), n(50361)),
        i = n.n(o),
        u = "insure-token",
        c = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "storage";
            (0, a.Z)(this, e), (this.name = t);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "setItem",
                value: function (e) {
                  var t = {
                      name: "",
                      value: "",
                      expires: "",
                      startTime: new Date().getTime(),
                    },
                    n = {};
                  if ((Object.assign(n, t, e), n.expires))
                    localStorage.setItem(n.name, JSON.stringify(n));
                  else {
                    var a = Object.prototype.toString.call(n.value);
                    "[object Object]" === a &&
                      (n.value = JSON.stringify(n.value)),
                      "[object Array]" === a &&
                        (n.value = JSON.stringify(n.value)),
                      localStorage.setItem(n.name, n.value);
                  }
                },
              },
              {
                key: "getItem",
                value: function (e) {
                  var t = localStorage.getItem(e),
                    n = i()(e);
                  if (!t) return !1;
                  try {
                    t = JSON.parse(t);
                  } catch (e) {
                    t = n;
                  }
                  return t.startTime
                    ? new Date().getTime() - t.startTime > t.expires
                      ? (localStorage.removeItem(e), !1)
                      : t.value
                    : t;
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  localStorage.removeItem(e);
                },
              },
              {
                key: "clear",
                value: function () {
                  localStorage.clear();
                },
              },
            ]),
            e
          );
        })(),
        m = new c(u);
      function h() {
        return m.getItem(u);
      }
      function s(e) {
        return m.setItem({ name: u, value: e, expires: 9e5 });
      }
      function p() {
        m.removeItem(u), m.removeItem("userData");
      }
    },
    5732: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return u;
        },
      });
      n(47042),
        n(41539),
        n(39714),
        n(68309),
        n(91038),
        n(78783),
        n(74916),
        n(82526),
        n(41817),
        n(32165),
        n(66992),
        n(33948);
      var a = n(31336),
        r = n(70538);
      function o(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var a = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return a >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[a++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          u = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (c = !0), (o = e);
          },
          f: function () {
            try {
              u || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var u = {
        data: function () {
          return { yearOptions: [], imgCache: {}, imgLoading: {} };
        },
        mounted: function () {
          this.getYearOptionsList();
        },
        methods: {
          getYearOptionsList: function () {
            this.yearOptions = [];
            for (var e = new Date().getFullYear(), t = 2020; t <= e + 1; t++)
              this.yearOptions.push({ key: t, value: t + "年" });
          },
          getImg: function (e) {
            var t = e;
            if (t)
              if (
                (-1 !== t.indexOf(",") && (t = t.split(",")), Array.isArray(t))
              ) {
                var n,
                  a = o(t);
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var r = n.value;
                    this.getImgItem(r);
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
              } else this.getImgItem(t);
          },
          getImgItem: function (e, t) {
            var n = this,
              o = this.$hashCode(e);
            if (!this.imgCache[o] && -1 !== this.imgLoading[o]) {
              var i = !0,
                u = e.split("|")[0];
              (-1 === u.indexOf(".png") &&
                -1 === u.indexOf(".jpg") &&
                -1 === u.indexOf(".jpeg")) ||
                (i = !1),
                r.default.set(this.imgLoading, o, -1),
                null != u &&
                  "" != u &&
                  a.Z.downloadFile(
                    "/cosdownload",
                    u,
                    u + (i ? ".png" : ""),
                    !0
                  ).then(function (e) {
                    (e = e +=
                      "&imageMogr2/format/webp/quality/30/ignore-error/1"),
                      r.default.set(n.imgCache, o, e),
                      r.default.delete(n.imgLoading, o),
                      t && t(e);
                  });
            }
          },
        },
      };
    },
    26339: function (e, t, n) {
      "use strict";
      n(41539), n(88674);
      t.Z = {
        init: function (e) {
          var t =
            "https://api.map.baidu.com/api?v=3.0&ak=tLLCVPrn3Gz8BmFngMO33svRnKwhKm2j&type=" +
            e +
            "&s=1&callback=onBMapCallback";
          return new Promise(function (n, a) {
            if (
              (e
                ? "undefined" != typeof BMapGL && n(BMapGL)
                : "undefined" != typeof BMap && n(BMap),
              (window.onBMapCallback = function () {
                n(e ? BMapGL : BMap);
              }),
              null == document.getElementById("mapScript"))
            ) {
              var r = document.createElement("script");
              r.setAttribute("type", "text/javascript"),
                r.setAttribute("src", t),
                r.setAttribute("id", "mapScript"),
                document.body.appendChild(r);
            }
          });
        },
      };
    },
    73254: function (e, t, n) {
      "use strict";
      n(69826), n(41539), n(47042);
      var a,
        r,
        o = n(19755);
      (r = []),
        ((a = o).fn.myScroll = function (e) {
          for (var t = 0, n = r.length; t < n; t++) clearInterval(r[t]);
          var o = a.extend({}, { speed: 100, rowHeight: 36 }, e);
          function i(e, t) {
            e.find(".myscrollDiv").animate(
              { marginTop: "-=1" },
              0,
              function () {
                Math.abs(parseInt(a(this).css("margin-top"))) >= t &&
                  (a(this).find(".myscrollItem").slice(0, 1).appendTo(a(this)),
                  a(this).css("margin-top", "0"));
              }
            );
          }
          this.each(function (e) {
            var t = o.rowHeight,
              n = o.speed,
              u = a(this),
              c = 1;
            clearInterval(r[e]),
              (r[e] = setInterval(function () {
                u.find(".myscrollDiv").height() <= u.height()
                  ? clearInterval(r[e])
                  : i(u, t);
              }, n)),
              u.bind({
                mouseenter: function (t) {
                  clearInterval(r[e]), (c = 0);
                },
                mouseleave: function (a) {
                  0 == c &&
                    (clearInterval(r[e]),
                    (r[e] = setInterval(function () {
                      u.find(".myscrollDiv").height() <= u.height()
                        ? clearInterval(r[e])
                        : i(u, t);
                    }, n))),
                    (c = 1);
                },
              });
          });
        });
    },
    57382: function (e, t, n) {
      "use strict";
      n.r(t);
      t.default = {
        namespaced: !0,
        state: { currentActive: 100, sideActive: null, keepAlive: [] },
        mutations: {
          SET_MENU: function (e, t) {
            e.currentActive = t;
          },
          KEEP_ALIVE: function (e, t) {
            e.keepAlive = t;
          },
          SET_SIDE: function (e, t) {
            e.sideActive = t;
          },
        },
        actions: {
          changeMenu: function (e, t) {
            (0, e.commit)("SET_MENU", t);
          },
          changeKeepAlive: function (e, t) {
            (0, e.commit)("KEEP_ALIVE", t);
          },
          changeSide: function (e, t) {
            (0, e.commit)("SET_SIDE", t);
          },
        },
      };
    },
    19958: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(15861),
        r = n(64687),
        o = n.n(r),
        i = (n(68309), n(41539), n(88674), n(58796)),
        u = n(42564),
        c = n(52381),
        m = {
          login: function (e, t) {
            var n = e.commit;
            return new Promise(function (e, a) {
              (0, u.x4)(t)
                .then(function (t) {
                  var a,
                    r = t.data;
                  null != r &&
                    r.data &&
                    (n("SET_USER_DATA", null == r ? void 0 : r.data),
                    $Storage.setUserData(null == r ? void 0 : r.data),
                    (0, i.o4)(
                      null == r || null === (a = r.data) || void 0 === a
                        ? void 0
                        : a.token
                    ));
                  e(r);
                })
                .catch(function (e) {
                  a(e);
                });
            });
          },
          userDataLoad: function (e, t) {
            var n = e.commit;
            return new Promise(function (e, a) {
              n("SET_USER_DATA", t);
            });
          },
          expiresChange: function () {
            return new Promise(function (e, t) {
              var n = (0, i.LP)();
              n && "" !== n && "undefined" !== n && (0, i.o4)((0, i.LP)()), e();
            });
          },
          logout: function (e) {
            var t = e.commit;
            e.state, e.dispatch;
            return new Promise(function (e, n) {
              (0, u.kS)()
                .then(function () {
                  t("SET_ROLES", []),
                    t("SET_USER_DATA", {}),
                    $Store.dispatch("menu/changeMenu", 100),
                    (0, i.gy)(),
                    (0, c.PV)(),
                    e();
                })
                .catch(function (e) {
                  n(e);
                });
            });
          },
          resetToken: function (e) {
            var t = e.commit;
            return new Promise(function (e) {
              t("SET_TOKEN", ""), t("SET_ROLES", []), (0, i.gy)(), e();
            });
          },
          changeRoles: function (e, t) {
            return (0, a.Z)(
              o().mark(function n() {
                var a, r, u, m, h, s;
                return o().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = e.commit),
                          (r = e.dispatch),
                          a("SET_TOKEN", (u = t + "-token")),
                          (0, i.o4)(u),
                          (n.next = 6),
                          r("getInfo")
                        );
                      case 6:
                        return (
                          (m = n.sent),
                          (h = m.roles),
                          (0, c.PV)(),
                          (n.next = 11),
                          r("permission/generateRoutes", h, { root: !0 })
                        );
                      case 11:
                        (s = n.sent),
                          c.ZP.addRoutes(s),
                          r("tagsView/delAllViews", null, { root: !0 });
                      case 14:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        };
      t.default = {
        namespaced: !0,
        state: {
          name: "",
          avatar: "",
          introduction: "",
          roles: [],
          userData: {},
        },
        mutations: {
          SET_INTRODUCTION: function (e, t) {
            e.introduction = t;
          },
          SET_NAME: function (e, t) {
            e.name = t;
          },
          SET_AVATAR: function (e, t) {
            e.avatar = t;
          },
          SET_ROLES: function (e, t) {
            e.roles = t;
          },
          SET_USER_DATA: function (e, t) {
            e.userData = t;
          },
        },
        actions: m,
      };
    },
    1249: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      n(41539), n(66992), n(33948), n(74916), n(15306);
      var a = n(70538),
        r = n(20629),
        o = {
          menu: function (e) {
            return e.menu.currentActive;
          },
          sideActive: function (e) {
            return e.menu.sideActive;
          },
          keepAlive: function (e) {
            return e.menu.keepAlive;
          },
          userData: function (e) {
            return e.user.userData;
          },
        };
      a.default.use(r.ZP);
      var i = n(96970),
        u = i.keys().reduce(function (e, t) {
          var n = t.replace(/^\.\/(.*)\.\w+$/, "$1"),
            a = i(t);
          return (e[n] = a.default), e;
        }, {}),
        c = new r.ZP.Store({ modules: u, getters: o });
    },
    63046: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return u;
        },
      });
      n(47941), n(41539), n(88674);
      var a = n(70538),
        r = n(20629),
        o = n(96547);
      a.default.use(r.ZP);
      var i = new r.ZP.Store({
        state: {
          breadcrumb: null,
          globalIndustryType: null,
          searchCache: {},
          changePassword: 0,
          showGrafana: 0,
          bsOverviewRegion: "",
          bsOverviewStreet: "",
          bsOverviewYear: "",
          bsOverviewCategory: 0,
          bsRiskRegion: "",
          bsRiskStreet: "",
          bsRiskYear: "",
          bsRiskCategory: 0,
        },
        mutations: {
          set: function (e, t) {
            e[t.key] = t.value;
          },
        },
        actions: {
          set: function (e, t) {
            e.commit("set", t);
          },
        },
      });
      (i.storeSet = function (e, t) {
        arguments.length > 2 &&
          void 0 !== arguments[2] &&
          arguments[2] &&
          o.Z.localStorageSet(e, JSON.stringify(t || "")),
          i.commit("set", { key: e, value: t });
      }),
        (i.storeGet = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = i.state[e];
          if (null != n) return n;
          if (!t) return null;
          if (null == o.Z.localStorageGet(e)) return null;
          try {
            return JSON.parse(o.Z.localStorageGet(e));
          } catch (t) {
            return o.Z.localStorageGet(e);
          }
        }),
        (i.dispatch = function (e, t) {
          return (
            arguments.length > 2 &&
              void 0 !== arguments[2] &&
              arguments[2] &&
              o.Z.localStorageSet(e, JSON.stringify(t)),
            new Promise(function (n, a) {
              i.dispatch("set", { key: e, value: t })
                .then(function (e) {
                  n(e);
                })
                .catch(function (e) {
                  a(e);
                });
            })
          );
        });
      var u = i;
    },
    99168: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var a = n(15671),
        r = n(43144),
        o =
          (n(68309),
          n(74916),
          n(15306),
          n(57327),
          n(41539),
          n(54747),
          n(21249),
          n(39714),
          n(88674),
          n(58796)),
        i = n(34661),
        u = n(54867),
        c = n(48592),
        m = n(31336),
        h = n(4942),
        s = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, null, [
              {
                key: "encode",
                value: function (t) {
                  var n,
                    a,
                    r,
                    o,
                    i,
                    u,
                    c,
                    m = "",
                    h = 0;
                  for (t = e.utf8Encode(t); h < t.length; )
                    (o = (n = t.charCodeAt(h++)) >> 2),
                      (i = ((3 & n) << 4) | ((a = t.charCodeAt(h++)) >> 4)),
                      (u = ((15 & a) << 2) | ((r = t.charCodeAt(h++)) >> 6)),
                      (c = 63 & r),
                      isNaN(a) ? (u = c = 64) : isNaN(r) && (c = 64),
                      (m =
                        m +
                        e.keyString.charAt(o) +
                        e.keyString.charAt(i) +
                        e.keyString.charAt(u) +
                        e.keyString.charAt(c));
                  return m;
                },
              },
              {
                key: "decode",
                value: function (t) {
                  var n,
                    a,
                    r,
                    o,
                    i,
                    u,
                    c = "",
                    m = 0;
                  for (t = t.replace(/[^A-Za-z0-9+/=]/g, ""); m < t.length; )
                    (n =
                      (e.keyString.indexOf(t.charAt(m++)) << 2) |
                      ((o = e.keyString.indexOf(t.charAt(m++))) >> 4)),
                      (a =
                        ((15 & o) << 4) |
                        ((i = e.keyString.indexOf(t.charAt(m++))) >> 2)),
                      (r =
                        ((3 & i) << 6) |
                        (u = e.keyString.indexOf(t.charAt(m++)))),
                      (c += String.fromCharCode(n)),
                      64 != i && (c += String.fromCharCode(a)),
                      64 != u && (c += String.fromCharCode(r));
                  return (c = e.utf8Decode(c));
                },
              },
              {
                key: "utf8Encode",
                value: function (e) {
                  e = e.replace(/\r\n/g, "\n");
                  for (var t = "", n = 0; n < e.length; n++) {
                    var a = e.charCodeAt(n);
                    a < 128
                      ? (t += String.fromCharCode(a))
                      : a > 127 && a < 2048
                      ? ((t += String.fromCharCode((a >> 6) | 192)),
                        (t += String.fromCharCode((63 & a) | 128)))
                      : ((t += String.fromCharCode((a >> 12) | 224)),
                        (t += String.fromCharCode(((a >> 6) & 63) | 128)),
                        (t += String.fromCharCode((63 & a) | 128)));
                  }
                  return t;
                },
              },
              {
                key: "utf8Decode",
                value: function (e) {
                  for (var t = "", n = 0, a = 0, r = 0, o = 0; n < e.length; )
                    (a = e.charCodeAt(n)) < 128
                      ? ((t += String.fromCharCode(a)), n++)
                      : a > 191 && a < 224
                      ? ((r = e.charCodeAt(n + 1)),
                        (t += String.fromCharCode(((31 & a) << 6) | (63 & r))),
                        (n += 2))
                      : ((r = e.charCodeAt(n + 1)),
                        (o = e.charCodeAt(n + 2)),
                        (t += String.fromCharCode(
                          ((15 & a) << 12) | ((63 & r) << 6) | (63 & o)
                        )),
                        (n += 3));
                  return t;
                },
              },
            ]),
            e
          );
        })();
      (0, h.Z)(
        s,
        "keyString",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      );
      var p = (function () {
        function e() {
          (0, a.Z)(this, e);
        }
        return (
          (0, r.Z)(e, null, [
            {
              key: "go",
              value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  a =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                e.selectMenu(t, n, a, r);
              },
            },
            {
              key: "getMapIco",
              value: function () {
                return "";
              },
            },
            {
              key: "logOut",
              value: function () {
                var e = this;
                u.Z.confirm("确认框", "确认登出?", function (t) {
                  t &&
                    $Http("logout").then(function () {
                      (0, o.gy)(), e.go("/login");
                    });
                });
              },
            },
            {
              key: "getBillList",
              value: function (e, t) {
                var n = [],
                  a = [],
                  r = [];
                for (var o in i.nL)
                  i.nL[o].value & e && a.push(i.nL[o].name),
                    i.nL[o].value & t
                      ? n.push(i.nL[o].name)
                      : -1 !== a.indexOf(i.nL[o].name) && r.push(i.nL[o].name);
                return { allReady: n, allNeed: a, notSend: r };
              },
            },
            {
              key: "getInsuranceCompanyCode",
              value: function (e) {
                for (var t in i.nL) if (i.nL[t].name == e) return i.nL[t].value;
              },
            },
            {
              key: "selectMenu",
              value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  a =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = t;
                null === r &&
                  ((r = e.getPath()),
                  setTimeout(function () {
                    $EventBus.$emit("onQuery", n);
                  }, 1));
                var o = window.router;
                if (a && !$isApp)
                  if (null === n)
                    if (r.length > 4 && "http" === r.substr(0, 4))
                      window.open(r, "_blank");
                    else {
                      var i = o.resolve({ path: r }).href;
                      window.open(i, "_blank");
                    }
                  else if (r.length > 4 && "http" === r.substr(0, 4))
                    window.open(r + "?" + n, "_blank");
                  else {
                    var u = o.resolve({ path: r, query: n }).href;
                    window.open(u, "_blank");
                  }
                else
                  null === n
                    ? o.push({ path: r })
                    : o.push({ path: r, query: n });
              },
            },
            {
              key: "goLogin",
              value: function () {
                $Storage.setToken(null), document.location.replace("/#/login");
              },
            },
            {
              key: "getOptions",
              value: function (e, t, n, a) {
                if (t && t.indexOf(",") > -1) {
                  var r = t.split(",");
                  if ("json" === r[0]) {
                    var o = $Json.getJsonColumn(r[1], r[2]);
                    r = o.data.split(",");
                  }
                  if ("table" === r[0]) {
                    var i = r[1],
                      u = r[2].split("|"),
                      m = u[1],
                      h =
                        i +
                        m.substring(0, 1).toUpperCase() +
                        m.substring(1, m.length) +
                        "List",
                      s = [i + "Save", i + "Delete"];
                    if ("noload" === r[3] || "noLoad" === r[3]) return;
                    $Http(h, null == n ? void 0 : n.filter, "GET", !1, s).then(
                      function (t) {
                        if (((e.length = 0), t.data.data)) {
                          if (t.data.data.length > 0)
                            t.data.data.forEach(function (t) {
                              if (n && n.filter) {
                                if (n.filter instanceof Function) {
                                  if (n.filter(t)) {
                                    var a = { key: t.id, value: t[m] };
                                    if (u.length > 2)
                                      for (var r = 2; r < u.length; r++)
                                        a[u[r]] = t[u[r]];
                                    e.push({ key: t.id, value: t[m] });
                                  }
                                } else
                                  for (var o in n.filter)
                                    if (t[o] === n.filter[o]) {
                                      var i = { key: t.id, value: t[m] };
                                      if (u.length > 2)
                                        for (var c = 2; c < u.length; c++)
                                          i[u[c]] = t[u[c]];
                                      e.push(i);
                                      break;
                                    }
                              } else {
                                var h = { key: t.id, value: t[m] };
                                if (u.length > 2)
                                  for (var s = 2; s < u.length; s++)
                                    h[u[s]] = t[u[s]];
                                e.push(h);
                              }
                            });
                          0 === e.length &&
                            e.push({ key: "-1", value: "列表为空..." }),
                            a && a(e);
                        }
                      }
                    );
                  } else if ("year" === r[0]) {
                    var p = parseInt(r[1], 10),
                      d = parseInt(r[2], 10),
                      l = parseInt(new Date().getFullYear(), 10);
                    for (
                      p < 100 && (p = l + p), d < 100 && (d = l + d);
                      p <= d;
                      p++
                    )
                      e.push({ key: p, value: p });
                  } else {
                    if ("enums" === r[0]) {
                      var f = [];
                      return (
                        c.Z.getEnumsArray(r[1]).map(function (e) {
                          var t = f.filter(function (t) {
                            return t.key === e[r[2]];
                          });
                          (t && 0 !== t.length) ||
                            f.push({ key: e[r[2]], value: e[r[3]] });
                        }),
                        $Web.isOrganization() &&
                          "itemServiceState" === r[1] &&
                          "state" === r[2] &&
                          (f = f.filter(function (e) {
                            return e.key >= 90 && 100 != e.key;
                          })),
                        f
                      );
                    }
                    for (var g = 0, b = r.length; g < b; g++) {
                      var v = r[g].split("|");
                      n && n.filter
                        ? n.filter instanceof Function &&
                          n.filter(v[0], v[1]) &&
                          e.push({ key: v[0], value: v[1] })
                        : e.push({ key: v[0], value: v[1] });
                    }
                    a && a(e);
                  }
                  return e;
                }
              },
            },
            {
              key: "getPath",
              value: function () {
                var e = document.location.toString().split("#");
                return e.length > 1 ? e[1].split("?")[0] : "";
              },
            },
            {
              key: "getScreenData",
              value: function (e, t, n, a) {
                var r = t.split(","),
                  o = r.map(function (t) {
                    return $Json.getJsonColumn(e, t).remark;
                  });
                n.pageSize || (n.pageSize = 100),
                  $Http(e + "List", n, "GET").then(function (e) {
                    var t = e.data.data.data.map(function (e) {
                      return r.map(function (t) {
                        return e[t];
                      });
                    });
                    a(o, t);
                  });
              },
            },
            {
              key: "getMain",
              value: function (e) {
                var t = e;
                return (
                  t.$ && (t = t.$),
                  "serviceCenter" == t.userGroupTypeTag
                    ? "服务中心"
                    : t.companyNameInfo
                    ? t.companyNameInfo
                    : t.organizationNameInfo
                    ? t.organizationNameInfo
                    : t.insuranceSubCompanyNameInfo
                    ? t.insuranceSubCompanyNameInfo
                    : t.insuranceCompanyNameInfo
                    ? t.insuranceCompanyNameInfo
                    : t.emergencyBureauNameInfo
                    ? t.emergencyBureauNameInfo
                    : ""
                );
              },
            },
            {
              key: "previewReport",
              value: function (e, t) {
                this.createReport(
                  t || window.router.app.$route.query.uid,
                  function (e) {
                    console.log(e.data.data),
                      m.Z.downloadFile(
                        "/cosdownload",
                        e.data.data.split("|")[0]
                      ).then(function (e) {
                        var t = encodeURIComponent(s.encode(e));
                        window.open(window.globle.kkFileView + t),
                          console.log(
                            window.globle.kkFileView + t,
                            "window.globle.kkFileView + previewFile"
                          );
                      });
                  },
                  e
                );
              },
            },
            {
              key: "previewReport2",
              value: function (e, t, n) {
                this.createReport(
                  t || window.router.app.$route.query.uid,
                  function (e) {
                    m.Z.downloadFile(
                      "/cosdownload",
                      e.data.data.split("|")[0]
                    ).then(function (e) {
                      var t = encodeURIComponent(s.encode(e));
                      console.log(
                        window.globle.kkFileView + t,
                        "window.globle.kkFileView + previewFile"
                      ),
                        n(window.globle.kkFileView + t);
                    });
                  },
                  e
                );
              },
            },
            {
              key: "previewReport1",
              value: function (e, t, n) {
                this.createReport1(
                  t || window.router.app.$route.query.uid,
                  function (e) {
                    m.Z.downloadFile(
                      "/cosdownload",
                      e.data.data.split("|")[0]
                    ).then(function (e) {
                      var t = encodeURIComponent(s.encode(e));
                      n(window.globle.kkFileView + t);
                    });
                  },
                  e
                );
              },
            },
            {
              key: "kkViewTest",
              value: function (e) {
                m.Z.downloadFile("/cosdownload", e).then(function (e) {
                  var t = encodeURIComponent(s.encode(e));
                  window.open(window.globle.kkFileView + t);
                });
              },
            },
            {
              key: "createReport",
              value: function (e, t) {
                var n = document.location.toString().split("#")[0];
                (n =
                  n + "#config/Download?file=$file&uid=" + e + "&name=$name"),
                  $Http("wordReport", { uid: e, fileUrl: n }, "POST").then(
                    function (e) {
                      t && t(e);
                    }
                  );
              },
            },
            {
              key: "createReport1",
              value: function (e, t) {
                var n = document.location.toString().split("#")[0];
                (n =
                  n + "#config/Download?file=$file&uid=" + e + "&name=$name"),
                  $Http("wordReport1", { uid: e, fileUrl: n }, "POST").then(
                    function (e) {
                      t && t(e);
                    }
                  );
              },
            },
            {
              key: "underCheckCreateReport",
              value: function (e, t) {
                var n = document.location.toString().split("#")[0];
                (n =
                  n + "#config/Download?file=$file&uid=" + e + "&name=$name"),
                  $Http(
                    "underCheckWordReport",
                    { uid: e, fileUrl: n },
                    "POST"
                  ).then(function (e) {
                    t && t(e);
                  });
              },
            },
            {
              key: "underCheckDownReport",
              value: function (e, t) {
                e &&
                  $Http("getInsurancePolicyData", { uid: e.uid }, "get").then(
                    function (e) {
                      var t = e.data.data;
                      if (t.underCheckWord) {
                        var n = t.underCheckWord;
                        null != n &&
                          m.Z.downloadFile(
                            "/cosdownload",
                            n.split("|")[0],
                            n.split("|")[1]
                          ).then(function () {});
                      } else
                        $Web.underCheckCreateReport(t.uid, function () {}),
                          $message.info("正在生成模板，请稍后再试！");
                    }
                  );
              },
            },
            {
              key: "downReport",
              value: function (e, t) {
                var n = this;
                e &&
                  $Http("insuranceServiceItemData", { uid: e.uid }, "get").then(
                    function (a) {
                      var r = a.data.data;
                      if (r.reportWord) {
                        var o = r.reportWord,
                          i = r.reportWordManager;
                        if (null != o) {
                          if (i && !n.isGov() && !n.isOrganSpecialist())
                            return void (t
                              ? t([
                                  {
                                    name: "专家版报告",
                                    file: o,
                                    time: e.reportTime,
                                  },
                                  {
                                    name: "机构负责人版报告",
                                    file: i,
                                    time: e.reportGenerationDate,
                                  },
                                ])
                              : m.Z.downloadFile(
                                  "/cosdownload",
                                  i.split("|")[0],
                                  i.split("|")[1]
                                ).then(function () {}));
                          m.Z.downloadFile(
                            "/cosdownload",
                            o.split("|")[0],
                            o.split("|")[1]
                          ).then(function () {});
                        }
                      } else
                        $Web.createReport(e.uid, function () {}),
                          $message.info("正在生成报告，请稍后再试！");
                    }
                  );
              },
            },
            {
              key: "downLoadFormCos",
              value: function (e) {
                return new Promise(function (t, n) {
                  m.Z.downloadFile("/cosdownload", e).then(function (e) {
                    return t(e), e;
                  });
                });
              },
            },
            {
              key: "isOrganSpecialist",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_ORGAN_SPECIALIST.tag;
              },
            },
            {
              key: "isOrganManager",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_ORGAN_MANAGER.tag;
              },
            },
            {
              key: "isOrganReport",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_ORGAN_REPORT.tag;
              },
            },
            {
              key: "isDistribute",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_DISTRIBUTE.tag;
              },
            },
            {
              key: "isDispatch",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_DISPATCH.tag;
              },
            },
            {
              key: "isOperate",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_OPERATE.tag;
              },
            },
            {
              key: "isDirector",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_DIRECTOR.tag;
              },
            },
            {
              key: "isCenterRisk",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_RISK.tag;
              },
            },
            {
              key: "isCenterJSDW",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_SUPERVISOR.tag;
              },
            },
            {
              key: "isFinance",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_FINANCE.tag;
              },
            },
            {
              key: "isCustomer",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.INSURANCE_COMPANY_CUSTOMER.tag;
              },
            },
            {
              key: "isCenterManager",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.SERVICE_CENTER_MANAGER.tag;
              },
            },
            {
              key: "isGovShi",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.GOV_SHI.tag;
              },
            },
            {
              key: "isGovQu",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.GOV_QUXIAN.tag;
              },
            },
            {
              key: "isGovJieDao",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.GOV_JIEDAO.tag;
              },
            },
            {
              key: "isInsuranceSalesman",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.INSURANCE_COMPANY_SALESMAN.tag;
              },
            },
            {
              key: "userId",
              value: function () {
                var e = $Store.getters.userData;
                return e ? e.id : "";
              },
            },
            {
              key: "isInsuranceDistribute",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.INSURANCE_COMPANY_DISTRIBUTE.tag;
              },
            },
            {
              key: "isInsuranceReporter",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.INSURANCE_COMPANY_REPORTER.tag;
              },
            },
            {
              key: "isInsuranceManager",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.INSURANCE_COMPANY_MANAGER.tag;
              },
            },
            {
              key: "isInsuranceMonitor",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.INSURANCE_COMPANY_MONITOR.tag;
              },
            },
            {
              key: "isInsuranceLeader",
              value: function () {
                var e = $Store.getters.userData;
                return !!e && e.tag === i.AW.INSURANCE_COMPANY_LEADER.tag;
              },
            },
            {
              key: "isGov",
              value: function () {
                return this.isGovShi() || this.isGovQu() || this.isGovJieDao();
              },
            },
            {
              key: "isServiceCenter",
              value: function () {
                return (
                  this.isDistribute() ||
                  this.isDispatch() ||
                  this.isOperate() ||
                  this.isDirector() ||
                  this.isCenterRisk() ||
                  this.isFinance() ||
                  this.isCenterManager()
                );
              },
            },
            {
              key: "isOrganization",
              value: function () {
                return this.isOrganSpecialist() || this.isOrganManager();
              },
            },
            {
              key: "isInsuranceCompany",
              value: function () {
                return (
                  this.isInsuranceSalesman() ||
                  this.isInsuranceManager() ||
                  this.isInsuranceLeader() ||
                  this.isInsuranceDistribute() ||
                  this.isInsuranceReporter() ||
                  this.isCustomer()
                );
              },
            },
          ]),
          e
        );
      })();
    },
    96970: function (e, t, n) {
      var a = { "./menu.js": 57382, "./user.js": 19958 };
      function r(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 96970);
    },
  },
  function (e) {
    e.O(
      0,
      [487, 8127, 8916, 9072, 2067, 5718, 9030, 3615, 4605, 6272],
      function () {
        return (t = 8959), e((e.s = t));
        var t;
      }
    );
    e.O();
  },
]);
