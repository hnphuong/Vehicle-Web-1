<template>
  <div class="impl-select-boxes w-100">
    <div class="nice-select" style="padding-left: 0px; padding-right: 0px">
      <div class="impl_welcome_text">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title panel-cus">
                <a
                  class="accordion-toggle accordion-cus collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="false"
                  >Chọn thêm</a
                >
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse" style="">
              <div class="panel-body panel-cus">
                <div
                  class="nice-select"
                  style="width: 100%; margin: 0px; border: 1px solid #f15b5a"
                >
                  <table
                    id="idex1:s6__xc_"
                    class="x1z"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    summary=""
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td class="x12" nowrap="">
                          <span id="idex1:s6::icon" style="display: none"
                            ><a name="_msgAnc_idex1:s6" title="Error" class="xc"
                              >X</a
                            ></span
                          >
                        </td>
                        <td valign="top" nowrap="" class="AFContentCell">
                          <select
                            id="idex1:s6"
                            name="idex1:s6"
                            onchange="mojarra.ab('idex1:s6',event,'change','@this',0)"
                            class="x2h"
                          >
                            <option value="0" selected="">
                              Chọn kiểu dáng
                            </option>
                            <option value="1">Sedan</option>
                            <option value="2">Hatchback</option>
                            <option value="3">Fastback</option>
                            <option value="4">Hard-top</option>
                            <option value="5">Minivan</option>
                            <option value="6">Coupe</option>
                            <option value="7">Cabriolet</option>
                            <option value="8">Van</option>
                            <option value="9">SUV</option>
                            <option value="10">Roadster</option>
                            <option value="11">Pikup</option>
                            <option value="12">Hybrid</option>
                            <option value="13">Crossover</option>
                            <option value="14">Convertibles</option>
                            <option value="15">Wagon</option>
                            <option value="16">MPV</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td class="AFComponentMessageCell">
                          <span id="idex1:s6::msg" style="display: none"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="nice-select"
                  style="width: 100%; margin: 0px; border: 1px solid #f15b5a"
                >
                  <table
                    id="idex1:s7__xc_"
                    class="x1z"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    summary=""
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td class="x12" nowrap="">
                          <span id="idex1:s7::icon" style="display: none"
                            ><a name="_msgAnc_idex1:s7" title="Error" class="xc"
                              >X</a
                            ></span
                          >
                        </td>
                        <td valign="top" nowrap="" class="AFContentCell">
                          <select
                            id="idex1:s7"
                            name="idex1:s7"
                            onchange="mojarra.ab('idex1:s7',event,'change','@this',0)"
                            class="x2h"
                          >
                            <option value="0" selected="">
                              Chọn nhiên liệu
                            </option>
                            <option value="1">Xăng</option>
                            <option value="2">Dầu</option>
                            <option value="3">Điện</option>
                            <option value="4">Xăng + Điện</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td class="AFComponentMessageCell">
                          <span id="idex1:s7::msg" style="display: none"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="nice-select" style="padding-left: 0px; padding-right: 0px">
      <div class="impl_welcome_text">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title panel-cus">
                <a
                  class="accordion-toggle accordion-cus collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  >Chọn giá</a
                >
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" style="">
              <div class="panel-body panel-cus">
                <div
                  class="nice-select"
                  style="width: 100%; margin: 0px; border: 1px solid #f15b5a"
                >
                  <table
                    id="idex1:s8__xc_"
                    class="x1z"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    summary=""
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td class="x12" nowrap="">
                          <span id="idex1:s8::icon" style="display: none"
                            ><a name="_msgAnc_idex1:s8" title="Error" class="xc"
                              >X</a
                            ></span
                          >
                        </td>
                        <td valign="top" nowrap="" class="AFContentCell">
                          <select
                            id="idex1:s8"
                            name="idex1:s8"
                            onchange="mojarra.ab('idex1:s8',event,'change','@this',0)"
                            class="x2h"
                          >
                            <option value="0" selected="">Chọn giá từ</option>
                            <option value="1">Từ 300 tr</option>
                            <option value="2">Từ 500 tr</option>
                            <option value="3">Từ 800 tr</option>
                            <option value="4">Từ 1,0 tỷ</option>
                            <option value="5">Từ 1,5 tỷ</option>
                            <option value="6">Từ 2,0 tỷ</option>
                            <option value="7">Từ 2,5 tỷ</option>
                            <option value="8">Từ 3,0 tỷ</option>
                            <option value="9">Từ 3,5 tỷ</option>
                            <option value="10">Từ 4,0 tỷ</option>
                            <option value="11">Từ 4,5 tỷ</option>
                            <option value="12">Từ 5,0 tỷ</option>
                            <option value="13">Từ 5,5 tỷ</option>
                            <option value="14">Từ 6,0 tỷ</option>
                            <option value="15">Từ 6,5 tỷ</option>
                            <option value="16">Từ 7,0 tỷ</option>
                            <option value="17">Từ 7,5 tỷ</option>
                            <option value="18">Từ 8,0 tỷ</option>
                            <option value="19">Từ 8,5 tỷ</option>
                            <option value="20">Từ 9,0 tỷ</option>
                            <option value="21">Từ 9,5 tỷ</option>
                            <option value="22">Từ 10 tỷ</option>
                            <option value="23">Từ 15 tỷ</option>
                            <option value="24">Từ 20 tỷ</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td class="AFComponentMessageCell">
                          <span id="idex1:s8::msg" style="display: none"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="nice-select"
                  style="width: 100%; margin: 0px; border: 1px solid #f15b5a"
                >
                  <table
                    id="idex1:s9__xc_"
                    class="x1z"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    summary=""
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td class="x12" nowrap="">
                          <span id="idex1:s9::icon" style="display: none"
                            ><a name="_msgAnc_idex1:s9" title="Error" class="xc"
                              >X</a
                            ></span
                          >
                        </td>
                        <td valign="top" nowrap="" class="AFContentCell">
                          <select
                            id="idex1:s9"
                            name="idex1:s9"
                            onchange="mojarra.ab('idex1:s9',event,'change','@this',0)"
                            class="x2h"
                          >
                            <option value="0" selected="">Chọn giá đến</option>
                            <option value="1">Đến 500 tr</option>
                            <option value="2">Đến 800 tr</option>
                            <option value="3">Đến 1,0 tỷ</option>
                            <option value="4">Đến 1,5 tỷ</option>
                            <option value="5">Đến 2,0 tỷ</option>
                            <option value="6">Đến 2,5 tỷ</option>
                            <option value="7">Đến 3,0 tỷ</option>
                            <option value="8">Đến 3,5 tỷ</option>
                            <option value="9">Đến 4,0 tỷ</option>
                            <option value="10">Đến 4,5 tỷ</option>
                            <option value="11">Đến 5,0 tỷ</option>
                            <option value="12">Đến 5,5 tỷ</option>
                            <option value="13">Đến 6,0 tỷ</option>
                            <option value="14">Đến 6,5 tỷ</option>
                            <option value="15">Đến 7,0 tỷ</option>
                            <option value="16">Đến 7,5 tỷ</option>
                            <option value="17">Đến 8,0 tỷ</option>
                            <option value="18">Đến 8,5 tỷ</option>
                            <option value="19">Đến 9,0 tỷ</option>
                            <option value="20">Đến 9,5 tỷ</option>
                            <option value="21">Đến 10 tỷ</option>
                            <option value="22">Đến 15 tỷ</option>
                            <option value="23">Đến 20 tỷ</option>
                            <option value="24">Đến 30 tỷ</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td class="AFComponentMessageCell">
                          <span id="idex1:s9::msg" style="display: none"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="nice-select" style="padding-left: 0px; padding-right: 0px">
      <div class="impl_welcome_text">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title panel-cus">
                <a
                  class="accordion-toggle accordion-cus collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  >Chọn năm</a
                >
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" style="">
              <div class="panel-body panel-cus">
                <div
                  class="nice-select"
                  style="width: 100%; margin: 0px; border: 1px solid #f15b5a"
                >
                  <table
                    id="idex1:s10__xc_"
                    class="x1z"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    summary=""
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td class="x12" nowrap="">
                          <span id="idex1:s10::icon" style="display: none"
                            ><a
                              name="_msgAnc_idex1:s10"
                              title="Error"
                              class="xc"
                              >X</a
                            ></span
                          >
                        </td>
                        <td valign="top" nowrap="" class="AFContentCell">
                          <select
                            id="idex1:s10"
                            name="idex1:s10"
                            onchange="mojarra.ab('idex1:s10',event,'change','@this',0)"
                            class="x2h"
                          >
                            <option value="0" selected="">Từ năm</option>
                            <option value="1">Năm 2010</option>
                            <option value="2">Năm 2011</option>
                            <option value="3">Năm 2012</option>
                            <option value="4">Năm 2013</option>
                            <option value="5">Năm 2014</option>
                            <option value="6">Năm 2015</option>
                            <option value="7">Năm 2016</option>
                            <option value="8">Năm 2017</option>
                            <option value="9">Năm 2018</option>
                            <option value="10">Năm 2019</option>
                            <option value="11">Năm 2020</option>
                            <option value="12">Năm 2021</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td class="AFComponentMessageCell">
                          <span
                            id="idex1:s10::msg"
                            style="display: none"
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  class="nice-select"
                  style="width: 100%; margin: 0px; border: 1px solid #f15b5a"
                >
                  <table
                    id="idex1:s11__xc_"
                    class="x1z"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    summary=""
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td class="x12" nowrap="">
                          <span id="idex1:s11::icon" style="display: none"
                            ><a
                              name="_msgAnc_idex1:s11"
                              title="Error"
                              class="xc"
                              >X</a
                            ></span
                          >
                        </td>
                        <td valign="top" nowrap="" class="AFContentCell">
                          <select
                            id="idex1:s11"
                            name="idex1:s11"
                            onchange="mojarra.ab('idex1:s11',event,'change','@this',0)"
                            class="x2h"
                          >
                            <option value="0" selected="">Đến năm</option>
                            <option value="1">Năm 2009</option>
                            <option value="2">Năm 2010</option>
                            <option value="3">Năm 2011</option>
                            <option value="4">Năm 2012</option>
                            <option value="5">Năm 2013</option>
                            <option value="6">Năm 2014</option>
                            <option value="7">Năm 2015</option>
                            <option value="8">Năm 2016</option>
                            <option value="9">Năm 2017</option>
                            <option value="10">Năm 2018</option>
                            <option value="11">Năm 2019</option>
                            <option value="12">Năm 2020</option>
                            <option value="13">Năm 2021</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td class="AFComponentMessageCell">
                          <span
                            id="idex1:s11::msg"
                            style="display: none"
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
